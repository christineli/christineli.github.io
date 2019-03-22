images="media/*"
for file in $images;
do
  mv "$file" `echo $file | tr ' ' '_'` ;
  mv "$file" `echo $file | tr 'JPG' 'jpg'` ;
  convert $file -resize 1800x1800 $file
done
