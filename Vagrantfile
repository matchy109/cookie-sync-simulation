id_rsa_ssh_key = File.read(File.join(Dir.home, ".ssh", "id_rsa"))
id_rsa_ssh_key_pub = File.read(File.join(Dir.home, ".ssh", "id_rsa.pub"))

Vagrant.configure("2") do |config|

  config.vm.define "sandbox1", primary: true do |sandbox1|
    sandbox1.vm.provider "virtualbox" do |v|
      v.memory = 4096
      v.cpus = 2
    end

    sandbox1.vm.hostname = "sandbox1"
    sandbox1.vm.box = "ubuntu"
    sandbox1.vm.network :private_network, ip: "192.168.100.27"
    sandbox1.hostsupdater.aliases = ["www.sandbox-1.com"]

    sandbox1.vm.provision :shell, :inline => "echo '#{id_rsa_ssh_key }' > /home/vagrant/.ssh/id_rsa && chmod 600 /home/vagrant/.ssh/id_rsa"
    sandbox1.vm.provision :shell, :inline => "echo '#{id_rsa_ssh_key_pub }' > /home/vagrant/.ssh/id_rsa.pub && chmod 600 /home/vagrant/.ssh/id_rsa.pub"
  end

  config.vm.define "sandbox2", primary: true do |sandbox2|
    sandbox2.vm.provider "virtualbox" do |v|
      v.memory = 4096
      v.cpus = 2
    end

    sandbox2.vm.hostname = "sandbox2"
    sandbox2.vm.box = "ubuntu"
    sandbox2.vm.network :private_network, ip: "192.168.100.28"
    sandbox2.hostsupdater.aliases = ["www.sandbox-2.com"]

    sandbox2.vm.provision :shell, :inline => "echo '#{id_rsa_ssh_key }' > /home/vagrant/.ssh/id_rsa && chmod 600 /home/vagrant/.ssh/id_rsa"
    sandbox2.vm.provision :shell, :inline => "echo '#{id_rsa_ssh_key_pub }' > /home/vagrant/.ssh/id_rsa.pub && chmod 600 /home/vagrant/.ssh/id_rsa.pub"
  end
end
