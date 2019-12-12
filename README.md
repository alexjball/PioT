# PioT
Easy Raspberry Pi Internet of Things (PioT) Integrations

- Continuously deploy a distributed application to Raspberry Pi's.
- Easily transfer credentials and automatically configure network connections.
- Monitor system health.
- Reliably start one-off and periodic jobs.

# Motivation and Principles

The Raspberry Pi platform is a stable, accessible platform to develop IoT applications. Still, deployment involves manually flashing images, configuring network and ssh, and running the app. PioT provides tools to automate this. Developers specify the desired system in configuration and code.

PioT should work with other CI/CD systems and just serves to optimize standard practices for Raspberry Pi's.

# Usage

An RPi is provisioned starting from a Raspbian Lite image. We use systemd services to run bootstrap scripts to establish network, update the system, and install common packages. Applications are deployed using additional systemd services, driven by the developer's configuration code.

Applications are deployed as git repositories that contain a `.piot.yaml` file. 

When flashing a new image to an SD card, you specify the application repo and initial network configuration. On boot, the Pi will establish network, download the application repo, and run the application based on the `.piot.yaml` file.

# SystemD Background

Systemd is the initialization system for recent versions of Debian. It coordinates all the services that makes up a running Linux system. Unit files specify how to start resources and services. 

Systemd loads units from specific directories. `systemctl enable/disable` installs units into these directories using symlinks. Units can specify (reverse) dependencies on other units.

Units can be run individually with `systemctl start/stop`. To boot the system, SystemD starts a default target unit, and uses the dependency graph to bring up the rest of the system.

# OS Image Background

Raspbian is distributed using `img` files, which contain the raw contents of the boot disk in a file. These files can be mounted in Linux and written to physical media to make it bootable. It's also easy to create a new `img` by reading back the physical media.

Other operating systems like Ubuntu and Debian provide install images. These files contain a lightweight bootable system that is used to format and set up files on the actual boot disk.

[PXE](https://wiki.debian.org/PXEBootInstall) is the standard way to boot new systems from network. RPi supports PXE over ethernet.

[QEMU](https://azeria-labs.com/emulate-raspberry-pi-with-qemu/) can be used to emulate Raspberry Pi images, allowing for easier development of provisioning scripts.
