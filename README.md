# cookie-sync-simulation
This is simulation to learn how we can create cross domain cookie-sync with javascript

## cookie-sync flow
![cookie-sync-timeline](https://raw.githubusercontent.com/matchy109/cookie-sync-simulation/master/image/cookie-sync-timeline.png)

### steps
1. show sandbox-2 web page
 1. access to sandbox-2 web page with web browser
 2. get html and javascript from nginx on sandbox-2
2. run javascript on web browser
 1. issue sandbox-2 domain cookie
 2. redirect to sandbox-1 web page in 5 sec
3. show sandbox-1 web page
   1. get html and javascript from nginx on sandbox-1
4. run javascript on web browser
 1. access to sandbox-2 nodejs script
 2. get sandbox-2 domain cookie
 3. issue sandbox-1 domain cookie
 4. insert cookie info to web page and show cross domain cookie-sync info on web browser

## setup local pc (Mac)
take the following steps

### required tools
* git
* vagrant

### prepare VMs with Vagrantfile
```
# check tools
git -v
vagrant -v

# install vagrant plugin
vagrant plugin install vagrant-hostsupdater

# git clone
git clone https://github.com/matchy109/cookie-sync-simulation.git

# create vagrant dir.
mkdir vagrant
cp cookie-sync-simulation/Vagrantfile vagrant/.
mv vagrant

# change vm.box name if you need
vi Vagrantfile
  # should set correct vm.box name you have

# start
vagrant up
```

### setup sandbox-1 and sandbox-2
```
# login to sandbox-1
vagrant ssh sandbox1

# take sandbox-1/README.md steps after you login

# login to sandbox-2
vagrant ssh sandbox2

# take sandbox-1/README.md steps after you login
```

### check and feel cookie-sync
* access the "http://www.sandbox-2.com" with web browser (chrome or firefox)
 * show sandbox-2 web page and redirect to sandbox-1 web page
 ![cookie-sync-timeline](https://raw.githubusercontent.com/matchy109/cookie-sync-simulation/master/image/sandboxs-web-page.png)
 * check cookie-sync result on sandbox-1 web page

## knowledge of settings for cross domain
should set the following value

### client
set true as withCredentials to XMLHttpRequest object if you use javascript
```
xhr.withCredentials = true;
```
you can see cookie field in http header after setting

### server
set the following value in http header fields

|field|value|
|---|---|
|Access-Control-Allow-Origin|http://www.sandbox-1.com|
|Access-Control-Allow-Credentials|true|
|Access-Control-Allow-Headers|Origin, X-Requested-With, Content-Type, Accept|
