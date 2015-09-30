# cookie-sync-simulation
This is simulation to learn how we can create cross domein cookie-sync with javascript

## cookie-sync timeline

## setup local pc (Mac)
take the following steps
### required tools
* git
* vagrant

### prepare VMs with Vagrantfile
```
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
vagrant ssh sandbox-1

# take sandbox-1/README.md steps after you login

# login to sandbox-2
vagrant ssh sandbox-2

# take sandbox-1/README.md steps after you login
```


### check
* access the "http://www.sandbox-2.com" with web browser (chrome or firefox)
 * should show web page
