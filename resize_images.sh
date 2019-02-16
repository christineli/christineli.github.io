photos="photos/*"
for file in $travel;
do
  convert $file -resize 1800x1800 $file
done
