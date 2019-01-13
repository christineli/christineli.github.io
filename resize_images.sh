photos="photos/*"
for file in $photos;
do
  convert $file -resize 1800x1800 $file
done
