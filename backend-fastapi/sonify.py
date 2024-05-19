import os
import numpy as np
import time
import rtmidi
import mido
import constants


def main():
    """
    Main process
    :return: 
    """

    # First, import CSV to a numpy array
    in_file = constants.input_csv_file
    array = read_csv_to_numpy(in_file)

    # Next, set a target MIDI range
    target_range = constants.midi_pitch_range
    target_min_value = constants.midi_c_5oct

    # Then, extract the target column within the array, correct the outliers, and transform the columns to the target
    # range
    extracted_temperature = extract_column_from_array(array, colnumber=2)
    extracted_congestion = extract_column_from_array(array, colnumber=7)
    corrected_temperature = eliminate_outliers_from_column(extracted_temperature)
    corrected_congestion = eliminate_outliers_from_column(extracted_congestion)
    transformed_temperature = normalize_column_to_midi_range(corrected_temperature, target_range, target_min_value)
    transformed_congestion = normalize_column_to_midi_range(corrected_congestion, target_range, target_min_value)

    # Create an array to send to the sonification function
    array = list(zip(transformed_temperature, transformed_congestion))

    # Sonify the data
    sonify(array)


def sonify(array):
    """
    Sonification function
    :param array: The array of the data that should be sonified.
    :return: 
    """
    
    # Open MIDI port 1
    midiout = rtmidi.MidiOut()
    available_ports = midiout.get_ports()
    if available_ports:
        midiout.open_port(0)
    else:
        midiout.open_virtual_port('Virtual output 1"')

    note_off = mido.Message('note_off', note=50, velocity=0).bytes()

    # Defines the panning between the channels
    cc_0 = mido.Message.from_str('control_change channel=7 control=10 value=0').bytes()
    cc_1 = mido.Message.from_str('control_change channel=8 control=10 value=127').bytes()
    midiout.send_message(cc_0)
    midiout.send_message(cc_1)

    for row in array:
        note_on_0 = mido.Message('note_on', channel=7, note=row[0], velocity=100).bytes()
        note_on_1 = mido.Message('note_on', channel=8, note=row[1], velocity=100).bytes()
        midiout.send_message(note_on_0)
        midiout.send_message(note_on_1)
        time.sleep(constants.time_to_next_note)
        midiout.send_message(note_off)

    del midiout


def read_csv_to_numpy(in_csv):
    """
    Helper function to read the CSV file to a NumPy array
    :param in_csv: The path to the input CSV file
    :return: The NumPy array
    """

    # first, check if input file exists
    if not os.path.exists(in_csv):
        print("*** ERROR! The input file does not exist. I quit the program here.")
        quit()

    my_data = np.genfromtxt(in_csv, delimiter=',', skip_header=constants.data_has_header)
    return my_data


def extract_column_from_array(array, col_number):
    """
    Extracts a specific column from an array and copies it to a list
    :param array: The NumPy array with the data
    :param col_number: The number of the column that should be extracted
    :return: The list with the extracted values
    """

    extracted_column = []
    for row in array:
        for number, column in enumerate(row):
            if number == col_number:
                extracted_column.append(column)
    return extracted_column


def eliminate_outliers_from_column(column):
    """
    Detects outlier from the extracted columns and elimininates them
    :param column: A list with the extracted values
    :return: A list with the values without outliers
    """

    mean = np.mean(column)
    std = np.std(column)
    lower_bound = mean - constants.max_std_dev_for_determining_outliers * std
    upper_bound = mean + constants.max_std_dev_for_determining_outliers * std

    # correct the list according to the settings in constants.py
    corrected_list = []
    for row in column:
        if row < lower_bound:
            row = lower_bound
        elif row > upper_bound:
            row = upper_bound
        corrected_list.append(row)
    return corrected_list


def normalize_column_to_midi_range(column, target_range, target_min_value):
    """
    Normalizes the values to the values range used by the MIDI format
    :param column: A list with the values that should be sonified
    :param target_range: The target range
    :param target_min_value: The target minimum value
    :return: A list with the transformed values
    """

    # determine min and max of the array
    min_value = min(column)
    max_value = max(column)
    value_range = max_value - min_value

    # conduct the transformation and return it
    transformed_column = []
    for row in column:
        ratio = (row - min_value) / value_range
        # print(ratio)
        end_note = int(ratio * target_range + target_min_value)
        transformed_column.append(end_note)
    return transformed_column


if __name__ == '__main__':
    time_0 = time.time()

    print('Sonification running...')

    main()

    print('The process took ' + str(round(time.time() - time_0, 1)) + ' seconds.')