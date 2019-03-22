<<<<<<< Updated upstream
photos="photos/*"
for file in $travel;
=======
photos="media/*/*"
for file in $photos;
>>>>>>> Stashed changes
do
  mv "$file" `echo $file | tr 'JPG' 'jpg'` ;
  convert $file -resize 1800x1800 $file
done
