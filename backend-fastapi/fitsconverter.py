import os
from astropy.io import fits
import numpy as np

code_dir = os.path.dirname(__file__)
root = os.path.dirname(code_dir)
data_dir = os.path.join(root, 'fits_files')
data_has_header = True

filename = (data_dir, 'SDSS_J101557.15+140521.9.fits') 
hdulist = fits.open(filename)
data = hdulist[1].data  

data_array = np.asarray(data)

delimiter = ","

np.savetxt("star_file.csv", data_array, delimiter=delimiter)

hdulist.close()

