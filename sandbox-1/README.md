# setup sandbox-1
take the following step
## install tools
```
# install nginx
sudo apt-get update
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
```
## place files
```
# git clone
git clone https://github.com/matchy109/cookie-sync-simulation.git

# move files
mv cookie-sync-simulation/sandbox-1/html ~/.
```
## restart nodejs
```
sudo service nginx restart
```
