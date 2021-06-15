[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=ac140999cb5b&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)
[![Deploy](https://github.com/olriko/teamspeak/actions/workflows/deploy.yml/badge.svg)](https://github.com/olriko/teamspeak/actions/workflows/deploy.yml)[![Destroy](https://github.com/olriko/teamspeak/actions/workflows/destroy.yml/badge.svg)](https://github.com/olriko/teamspeak/actions/workflows/destroy.yml)[![Reboot](https://github.com/olriko/teamspeak/actions/workflows/reboot.yml/badge.svg)](https://github.com/olriko/teamspeak/actions/workflows/reboot.yml)

# Teamspeak CI 🚀
A project to deploy and manage easily your teamspeak server with **DigitalOcean** and **Github CI** Workflow.
By default, it runs a free teamspeak license which means that it's a 32 user's slots server with the smallest DigitalOcean VPS which costs only **5 dollars** per month.

> Even if you are not friendly with github, it's really easy to create a Teamspeak server. You can watch out this [youtube guide (french)](https://www.youtube.com/watch?v=SB1nXV665uI).

# Get started

* Create an account on [DigitalOcean](https://www.digitalocean.com/?refcode=ac140999cb5b)
* Fork the project
* Set secret keys that you have to setup before running your Github CI :

| Key | Description | Required |
| ------------- |:-------------:| :-----:|
| DIGITALOCEAN_ACCESS_TOKEN| Your access token from digitalocean | true |
| PRIVATE_KEY | | true |
| PUBLIC_KEY | | true |
| TS3SERVER_DB_PASSWORD | | true |
| TS3SERVER_LICENSEKEY | | false |

> If you are not friendly with Shell to create SSH `PRIVATE_KEY` and `PUBLIC_KEY`, you can go in this [website](https://cryptotools.net/rsagen)

* Run your deploy [workflow manualy](./images/run-workflow.png)
* Once the workflow is fully runned, you can saved your super admin credential in last job called `Deploy` in the last step `Docker` ([example](./images/credential.png)).

* Find your server IP: Go in last job called `Deploy` in the last step `Your server IP`.
