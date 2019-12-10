# PioT
Easy Raspberry Pi Internet of Things (PioT) Integrations

- Continuously deploy a distributed application to Raspberry Pi's.
- Easily transfer credentials and automatically configure network connections.
- Monitor system health.
- Reliably start one-off and periodic jobs.

# Motivation and Principles

The Raspberry Pi platform is a stable, accessible platform to develop IoT applications. Still, deployment involves manually flashing images, configuring network and ssh, and running the app. PioT provides tools to automate this. Developers specify the desired system in configuration and code.

PioT should work with other CI/CD systems and just serves to optimize standard practices for Raspberry Pi's.

# Design

An RPi is provisioned starting from a Raspbian Lite image. We use systemd services to run bootstrap scripts to establish network, update the system, and install common packages. Applications are deployed using additional systemd services, driven by the developer's configuration code.

Applications are deployed as git repositories that contain a `.piot.yaml` file. 

When flashing a new image to an SD card, you specify the application repo and initial network configuration. On boot, the Pi will establish network, download the application repo, and run the application based on the `.piot.yaml` file.

