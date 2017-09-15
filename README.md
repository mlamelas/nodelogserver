# nodelogserver

docker build -t mlamelas/logserver .

docker run -d --name logserver -v /home/manu/logs:/log -p 8082:8080 mlamelas/logserver 

Save the post requests in a log folder
