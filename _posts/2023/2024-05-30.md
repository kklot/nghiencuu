---
title: Europe hexbin for cartogram
layout: post
categories: 
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
---
There is not an existing hexbin for Europe at the time of writing, we can however manually create it as follows:

Load required packages
```r
require(sf)
require(ggplot2)
require(dplyr)
```
Make an arbitrarily map extend, and assign a coordinate system. 
```r
x = st_sfc(st_polygon(list(rbind(c(0,0), c(10,0), c(10,10), c(0,0)))), crs = 4326)
g = st_make_grid(x, cellsize = 1, square = FALSE, flat_topped = TRUE)
g = st_as_sf(g)
```
Above we made 10 by 10 hexagon grid.

> The coordinates should at least fall within the real world boundaries, says, coordinates 1000,1000 won't exist.

Assign some IDs and identified, then plot them and start to pick values,
```r
g$id = 1:nrow(g)
g$pick = 0
cmap <- c(
    DEU = 81,
    POL = 88,
    LTU = 95,
    LVA = 102,
    EST = 115,
    DNK = 94,
    SWE = 107,
    FIN = 114,
    NLD = 87,
    BEL = 80,
    LUX = 74,
    FRA = 67,
    CHE = 61,
    AUT = 68,
    CZE = 75,
    ITA = 48,
    ESP = 60,
    PRT = 53,
    IRL = 79,
    SVN = 55,
    SVK = 82, 
    HUN = 69,
    HRV = 62,
    MLT = 28,
    ROU = 63,
    BGR = 50,
    GRC = 43,
    CYP = 31
)
g$pick[g$id %in% cmap] <- 1
g$iso <- ''
g$iso[cmap] <- names(cmap)
```
Plot the full grid and assigned values so that you can arrange the countries, check the plot and add/edit the number above.
```r
ggplot(g) + 
    geom_sf(aes(fill = factor(iso))) +
    theme(legend.position = 'none') +
    geom_sf_text(aes(label = id), color = 'white') +
    geom_sf_text(aes(label = iso), color = 'white', size = 3, nudge_y = -0.5)
```
![](https://i.imgur.com/TfTiE0Z.png)
Filter out selected countries
```r
g <- g %>% filter(pick == 1)
```
and the end results can be.
![](https://i.imgur.com/lCxwqTJ.png)
This can be further use for cartogram, for example, the WIP figure below (DOI to be updated soon)

![](https://i.imgur.com/NECzwQn.png)
Have fun!