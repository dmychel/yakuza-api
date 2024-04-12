<h1 align="center">Yakuza API</h1>
<p align="center">A resFUL API serving data from the Yakuza Series</p>

## Overview
This API's purpose is to serve character, location, and media assets to developers. The idea is to give Web Developers another free media asset resource to use for their passion projects.

You can request a one entry, all entries, or a random entry from one of two categories.

character or location

$ curl https://botw-compendium.herokuapp.com/api/v3/entry/white-maned_lynel
 ```
    {
        _id:            660b01fa4aa15727d67398b5
        category:       "character"
        description:    "Kazuma Kiryu (Kiryū Kazuma), also known as Joryu (Jōryū), and Taichi Suzuki (Suzuki Taichi), is the former primary protagonist of the Like a Dragon (formerly Yakuza) series. He is an agent of the Daidoji Faction, the former fourth chairman of the Tojo Clan, the former manager of Morning Glory Orphanage, and a former taxi driver for Nagasu Taxi."
        images:
        item:
        name:
    }
```