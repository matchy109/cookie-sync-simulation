# setup sandbox-2
take the following step
## install tools
```
# install nodejs
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs

# install nginx
sudo apt-get install nginx

# install git
sudo apt-get install git
```
## setup nginx
```
sudo vi /etc/nginx/sites-available/default

############################################################
 change document root (commnet out default setting)
############################################################
# root /usr/share/nginx/html;
root /home/vagrant/html;

############################################################
 add cookie-sync location
############################################################

location /cookie-sync {
        proxy_pass http://127.0.0.1:3000;
}

```
## place files
```
# git clone
git clone https://github.com/matchy109/cookie-sync-simulation.git

# move files
mv cookie-sync-simulation/sandbox-2/html ~/.
mv cookie-sync-simulation/sandbox-2/nodejs ~/.
```
## start nodejs
```
node nodejs/cookie-passer.js &
ps aux | grep cookie-passer
```
## restart nodejs
```
sudo service nginx restart
```
