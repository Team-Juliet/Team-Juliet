import os



# Important paths
code_dir = os.path.dirname(__file__)
root = os.path.dirname(code_dir)
data_dir = os.path.join(root, 'res')
data_has_header = True


# Data set
input_csv_file = os.path.join(data_dir, 'data_0_all.csv')
#input_csv_file = fitsconverter.csv_convert

# Sound settings
sample_rate = 44100  # Hertz
basic_frequency = 442  # Hertz
octave = 2 * basic_frequency
midi_c_5oct = 60
midi_c_7oct = 84
midi_pitch_range = midi_c_7oct - midi_c_5oct
time_to_next_note = 0.002


# Statistical analysis settings
max_std_dev_for_determining_outliers = 3