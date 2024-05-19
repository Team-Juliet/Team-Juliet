from astropy.io import fits
import numpy as np

filename = "backend-fastapi/asset/SDSS_J101547.86+140606.5_1.fits"  # Replace with your actual filename
hdulist = fits.open(filename)
data = hdulist[1].data  # Assuming data is in the second extension (modify as needed)

# If your data is not already a NumPy array
data_array = np.asarray(data)

# Choose a delimiter (comma by default)
delimiter = ","

# Save the data as a CSV file
np.savetxt("your_data.csv", data_array, delimiter=delimiter)

# Close the FITS file
hdulist.close()

