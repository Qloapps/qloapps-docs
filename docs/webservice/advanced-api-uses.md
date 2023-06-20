# Advance API Uses

In this section, we will explore some advanced topics of QloApps Webservice APIs.

Read all the subtopics under this section to understand the advance uses of web services in detail.


## GET Advance Parameters

There are some advance GET parameters to your request.So that you can modify the READ response.

### "display" parameter

Below are some examples of uses of display parameter:

- It can be used to return all fields when used with the full value: http://example.com/api/addresses/?display=full.
- You can ask for certain fields. For this, you have to send a list of fields names in square brackets: http://example.com/api/addresses/?display=[id, lastname, firstname, phone_mobile]

---

**NOTE**: This parameter can only be used for listings, not for individual records.
For the individual record with specific fields, you have to use display and filter parameters together.

---

### "filter" parameter

Below are the uses of filter parameter:

- **EQUAL operator** for specific items. example: http://example.com/api/addresses?filter[id_customer]=1
- **LIKE operator** for searching items. example: http://example.com/api/addresses?filter[city]=[new]%
- **OR operator** for items matching multiple criterias. example: http://example.com/api/addresses?filter[city]=[California|Alabama]
- **NOT EQUAL operator** (single value). example: http://example.com/api/customers?filter[firstname]=![john]
- **NOT EQUAL operator** (multiple values). example: http://example.com/api/customers?filter[firstname]=![john|Doe|Jack]
- **GREATER THAN operator** example: http://example.com/api/customers?filter[birthday]=>[1991-00-00%2000:00:00]
- **LOWER THAN operator** example: http://example.com/api/customers?filter[birthday]=<[1991-00-00%2000:00:00]

### "limit" parameter

With the limit parameter, You can define a limit to the expected result.
Only include the first 3 "states"

URL: **Website_URL/api/states/?display=full&limit=3**

```php
PHP:

$opt = array(
    'resource' => 'states',
    'display'  => 'full',
    'limit'    => '3'
);

```

Only include the first 5 elements starting from the 10th element from the states resource "states"
URL: **Website_URL/api/states/?display=full&limit=9,5**

```php
PHP:

$opt = array(
    'resource' => 'states',
    'display'  => 'full',
    'limit'    => '9,5'
);

```

### "sort" parameter

Filter the "customers" in alphabetical order according to the last name.

URL: **Website_URL/api/customers?display=full&sort=[lastname_ASC]**

```php
PHP:

$opt = array(
    'resource' => 'customers',
    'display'  => 'full',
    'sort'     => '[lastname_ASC]'
);

```

### "language" parameter

Some entities have multilanguage fields. API calls return the value for all languages installed in the website by default.
You can change the result by using the language parameter.

- **/api/room_types/1?language=2** : Returns room type with id = 1 with localized fields for Language id 2
- **/api/room_types/1?language=[1|2]** : Returns room type with id = 1 with translated fields for Language with id 1 or 2
- **/api/room_types/1?language=[3,5]** : Returns room type with id = 1 with translated fields for Language with id from 3 to 5


## Configuration Management

You can also manage the Global Configurations of the QloApps website through API.
Here we will understand the whole process (create/update) with the example of global configuration **PS_LANG_DEFAULT** which contains the default language of the website in the back-office.

---
- Global configurations are stored in the **_PREFIX_configuration** table in QloApps.
- You can get the configuration value by Configuration::get('PS_LANG_DEFAULT').
- You can save the configuration value by Configuration::updateValue('PS_LANG_DEFAULT', 3).
---


#### Check the configuration existance

Check if configuration exists or not by using filters and display parameters

-  /api/configurations/?display=[id,name,value]&filter[name]=[PS_LANG_DEFAULT]

If the configuration doesn’t exist then you will receive an empty list in the XML.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <configurations>
    </configurations>
</qloapps>

```

#### Create configuration

To create it with a value, you need to POST on the configuration API **/api/configurations/**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <configuration>
        <value>3</value>
        <name>PS_LANG_DEFAULT</name>
    </configuration>
</qloapps>

```

#### Update configuration

If a configuration exists, you will find the configuration information in the XML.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <configurations>
        <configuration>
            <id><![CDATA[107]]></id>
            <value><![CDATA[3]]></value>
            <name><![CDATA[PS_LANG_DEFAULT]]></name>
        </configuration>
    </configurations>
</qloapps>

```
Now to update the value of the configuration :

You have to send **PUT** request with xml having new value using the configuration id /api/configurations/107

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <configuration>
        <id>107</id>
        <value>5</value>
        <name>PS_LANG_DEFAULT</name>
    </configuration>
</qloaps>
```

---
**Important** :

You have to be sure about the existence of the configuration before any action POST|PUT. Otherwise, duplicate values will be created in the database.

---

### Create/Update with QloApps Webservice lib

You can also perform the above actions through the QloApps Webservice library.

see the below example to create/update PS_LANG_DEFAULT configuration through the PHP Webservice library.

```php
<?php

require_once('./PSWebServiceLibrary.php');

try {
    $webServiceUrl = 'http://example.com/';
    $webServiceKey = 'MNBDHALDK122DA879ADAD12ASKSK12W3';
    $webServiceObj = new PrestaShopWebservice($webServiceUrl, $webServiceKey, false);

    $configName = 'PS_LANG_DEFAULT';
    $configValue = 3;

    // First check if configuration exists
    $xml = $webServiceObj->get([
        'resource' => 'configurations',
        'filter[name]' => '['. $configName . ']',
    ]);

    $configurationId = null;
    if ($xml->configurations->configuration->count() > 0) {
        $configurationId = (int) $xml->configurations->configuration[0]->attributes()['id'];
    }

    // Check if id is black or exists already
    if (null === $configurationId) {
        $configXml = $webServiceObj->get(['url' => $webServiceUrl . 'api/configurations?schema=blank']);
    } else {
        $configXml = $webServiceObj->get([
            'resource' => 'configurations',
            'id' => $configurationId,
        ]);
    }

    // Update configuration name and value
    $configXml->configuration[0]->name = $configName;
    $configXml->configuration[0]->value = $configValue;
} catch (PrestaShopWebserviceException $e) {
    echo 'Error:' . $e->getMessage() . PHP_EOL;
}

// if blank the create a new configuration
if (null === $configurationId) {
    try {
        $webServiceObj->add([
            'resource' => 'configurations',
            'postXml' => $configXml->asXML(),
        ]);
        echo 'Created configuration successfully ' . $configName . ' = ' . $configValue . PHP_EOL;
    } catch (PrestaShopWebserviceException $e) {
        echo 'Error while configuration creation : ' . $e->getMessage() . PHP_EOL;
    }
} else {
    // if configuration exists then update the configuration
    try {
        $webServiceObj->edit([
            'resource' => 'configurations',
            'id' => $configurationId,
            'putXml' => $configXml->asXML(),
        ]);
        echo 'Updated configuration successfully ' . $configName . ' = ' . $configValue . PHP_EOL;
    } catch (PrestaShopWebserviceException $e) {
        echo 'Error while configuration updation : ' . $e->getMessage() . PHP_EOL;
    }
}

```

## Image Management

QloApps manages images via the **image** resource and several other resources use it as well to manage their own images. There are several types of images available, which can all be accessed via their respective API:

| Image type                | API URL                    |
| :---                      | :---                       |
| General images            | /api/images/general        |
| Product images            | /api/images/products       |
| Customization images      | /api/images/customizations |
| Store images              | /api/images/stores         |


*Use /api/images API to get a list of all image types in QloApps.*


### Image format

All images types return the same format except general images. A list of image types related to the resource and a list of images for this kind of resource will be returned. Below is the format -

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
  <image_types>
    <image_type id="1" name="cart_default" xlink:href="http://example.com/api/image_types/1"/>
    <image_type id="4" name="home_default" xlink:href="http://example.com/api/image_types/4"/>
    <image_type id="5" name="large_default" xlink:href="http://example.com/api/image_types/5"/>
    <image_type id="3" name="medium_default" xlink:href="http://example.com/api/image_types/3"/>
    <image_type id="2" name="small_default" xlink:href="http://example.com/api/image_types/2"/>
    <image_type id="6" name="thickbox_default" xlink:href="http://example.com/api/image_types/6"/>
  </image_types>
  <images>
    <image id="1" xlink:href="http://example.com/api/images/room_types/1"/>
    <image id="2" xlink:href="http://example.com/api/images/room_types/2"/>
    <image id="3" xlink:href="http://example.com/api/images/room_types/3"/>
    <image id="4" xlink:href="http://example.com/api/images/room_types/4"/>
  </images>
</qloapps>

```

### GET image API

Through this API, you can request any resource's image. In the response, images are returned themselves.

#### Default API

General url format is **/api/images/{resource}/{resource_id}** for most resources.
You can add an additional parameter for images type **/api/images/{resource}/{resource_id}/{image_type}**.

**resource**: is the name of resource (ex: room_types.)
**resource_id**: is the id (integer) of the resource.
**image_type**:  image type (ex: small_default, mediunm_default, …)

Target image as a response will be returned.

#### General Images API

The general image API returns the images related to the website like the header or icons image. **The /api/images/general** returns the list of image types.

Append the specific type of image in the URL to get the image. Example:  to get the header image **/api/images/general/header**.

#### Room Type images API

This API is almost like the default API except that room types may have multiple images. so this API contains an extra parameter for the image ID /api/images/room_types/{room_type_id}/{image_id} to get the image.


### Adding new image

We only explain to room type here as this resource has multiple images. we only update its image for other resources.
We only post one image to the API and this image will then be resized into all the associated formats.

#### Using an HTML form

```html
<form enctype="multipart/form-data" method="POST" action="http://MNBDHALDK122DA879ADAD12ASKSK12W3@example.com/api/images/room_types/1">
  <fieldset>
    <legend>Add image</legend>
    <input type="file" name="image">
    <input type="submit" value="Execute">
  </fieldset>
</form>
```

#### Using cURL

To create a new image we are going to use the /images/room_types API. We won’t use the PrestaShopWebservice class here, but a cURL request.

```php
$imgUrl = 'http://example.com/api/images/room_types/10/';
$key  = 'MNBDHALDK122DA879ADAD12ASKSK12W3';

//Here you set the path to the image you need to upload
$imgpath = '/path/to/the/image.jpg';
$image_mime = 'image/jpg';

$params['image'] = new CurlFile($imgpath, $image_mime);

$ch = curl_init();
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLINFO_HEADER_OUT, 1);
curl_setopt($ch, CURLOPT_URL, $imgUrl);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_USERPWD, $key.':');
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
$result = curl_exec($ch);
$httpResCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if (200 == $httpResCode) {
    echo 'Image successfully created.';
}

```

### Update an image

Update image API is the same as adding an image but the API expects a PUT method.

Because all clients can not handle PUT HTTP method, you can add a parameter **ps_method** in the URL.

#### Using an HTML form

```html
<form action="http://MNBDHALDK122DA879ADAD12ASKSK12W3@example.com/api/images/room_types/2" method="POST" enctype="multipart/form-data">
  <fieldset>
    <legend>Update image 2</legend>
    <input name="ps_method" value="PUT" type="hidden">
    <input name="image" type="file">
    <input value="Submit" type="submit">
  </fieldset>
</form>
```

#### Using cURL

```php

$imgUrl = 'http://example.com/api/images/room_types/2/?ps_method=PUT';
$key  = 'MNBDHALDK122DA879ADAD12ASKSK12W3';

//Here you set the path to the image you need to upload
$imgpath = '/path/to/the/image.jpg';
$image_mime = 'image/jpg';

$params['image'] = new CurlFile($imgpath, $image_mime);

$ch = curl_init();
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLINFO_HEADER_OUT, 1);
curl_setopt($ch, CURLOPT_URL, $imgUrl);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_USERPWD, $key.':');
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);

$result = curl_exec($ch);
$httpResCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

if (200 == $httpResCode) {
    echo 'Image successfully updated.';
}

```

## Multilanguage | Localized fields

Some entities have multilanguage or localized fields. API calls return the values for all languages installed on the website by default.

### Response for Language fields

Below are the examples of responses of the API for multilingual fields for the room_type resource.

#### output_format=XML
Response in the xml format :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <room_type>
        <id><![CDATA[5]]></id>
        <id_manufacturer xlink:href="http://example.com/api/manufacturers/1"><![CDATA[1]]></id_manufacturer>
        <id_supplier><![CDATA[0]]></id_supplier>
        <id_category_default xlink:href="http://example.com/api/categories/8"><![CDATA[8]]></id_category_default>
        ...
        <name>
            <language id="1" xlink:href="http://example.com/api/languages/1"><![CDATA[Delux Rooms]]></language>
            <language id="2" xlink:href="http://example.com/api/languages/2"><![CDATA[Chambre de luxe]]></language>
        </name>
        <description>
            <language id="1" xlink:href="http://example.com/api/languages/1"><![CDATA[<p><span style="font-size:10pt;font-style:normal;">King Size rooms for 2 adults and 2 children.</span></p>]]></language>
            <language id="2" xlink:href="http://example.com/api/languages/2"><![CDATA[<p><span style="font-size:10pt;font-style:normal;">Chambres King Size pour 2 adultes et 2 enfants.</span></p>]]></language>
        </description>
        ...
    </room_type>
</qloapps>

```

#### output_format=JSON
Response in the JSON format :

```json
{
    "room_type": {
        "id": 5,
        ...
        "name": [
            {
                "id": "1",
                "value": "Delux Rooms"
            },
            {
                "id": "2",
                "value": "Chambre de luxe"
            }
        ],
        "description": [
            {
                "id": "1",
                "value": "<p><span style=\"font-size:10pt;font-style:normal;\">King Size rooms for 2 adults and 2 children.</span></p>"
            },
            {
                "id": "2",
                "value": "<p><span style=\"font-size:10pt;font-style:normal;\">Chambres King Size pour 2 adultes et 2 enfants.</span></p>"
            }
        ],
        ...
    }
}

```

### Single language case

In this case, When you have installed only one language on your website then only the values of that language will be returned.

```json
{
    "room_type": {
        "id": 5,
        ...
        "name": "Delux Rooms",
        "description": "<p><span style=\"font-size:10pt;font-style:normal;\">King Size rooms for 2 adults and 2 children.</span></p>",
        ...
    }
}
```

### "language" parameter

As API calls return the value for all languages installed in the website by default. You can change the result by using the language parameter.

- **/api/room_types/1?language=2** : Returns room type with id = 1 with localized fields for Language id 2
- **/api/room_types/1?language=[1|2]** : Returns room type with id = 1 with translated fields for Language with id 1 or 2
- **/api/room_types/1?language=[3,5]** : Returns room type with id = 1 with translated fields for Language with id from 3 to 5



## Availability & Rates search API

QloApps provides an advance API for getting availability and rates information of a hotel with multiple search parameters in the api request.

With the help of this api, you can get the information of the inventories and rates of room types for the requested hotel/property and a date duration. You can also filter results according to the available parameters in the request.

#### API endpoint

If QloApps is launched at url http://example.com then endpoint of the availability & rates search api will be :

**http://example.com/api/hotel_ari**

---

**NOTE**: Replace **domain** and **webservice api key** in the documentaion with your domain and api key while making api requests.

---

### Schema

Suppose your webservice access api key is MNBDHALDK122DA879ADAD12ASKSK12W3. Then schema of the api can be fetched from below request parameters:

**Url**: http://example.com/api/hotel_ari?ws_key=MNBDHALDK122DA879ADAD12ASKSK12W3&schema=blank

**Method**: GET

#### Schema Format

After requesting for the schema, you will get below format of the schema of the availability & rates search api.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <hotel_ari>
        <id_hotel></id_hotel>
        <id_room_type></id_room_type>
        <date_from></date_from>
        <date_to></date_to>
        <get_available_rooms></get_available_rooms>
        <get_booked_rooms></get_booked_rooms>
        <get_partial_available_rooms></get_partial_available_rooms>
        <get_unavailable_rooms></get_unavailable_rooms>
        <associations>
            <room_occupancies>
                <room_occupancy>
                    <adults></adults>
                    <children></children>
                </room_occupancy>
            </room_occupancies>
        </associations>
    </hotel_ari>
</qloapps>
```

### Synopsis

The synopsis of the API can be fetched from below request parameters:

**Url**: http://example.com/api/hotel_ari?ws_key=MNBDHALDK122DA879ADAD12ASKSK12W3&schema=synopsis

**Method**: GET

#### Synopsis Format

After requesting for the synopsis, you will get below format of the synopsis of the availability & rates search api.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <hotel_ari>
        <id_hotel required="true" format="isUnsignedInt"></id_hotel>
        <id_room_type format="isUnsignedInt"></id_room_type>
        <date_from required="true" format="isDate"></date_from>
        <date_to required="true" format="isDate"></date_to>
        <get_available_rooms format="isBool"></get_available_rooms>
        <get_booked_rooms format="isBool"></get_booked_rooms>
        <get_partial_available_rooms format="isBool"></get_partial_available_rooms>
        <get_unavailable_rooms format="isBool"></get_unavailable_rooms>
        <associations>
            <room_occupancies nodeType="room_occupancy" api="room_occupancies">
                <room_occupancy>
                    <adults required="true"></adults>
                    <children required="true"></children>
                </room_occupancy>
            </room_occupancies>
        </associations>
    </hotel_ari>
</qloapps>
```

### Schema / Synopsis Xml field details
To get the Availability & Rates information you have to fill the blank schema with your data according to your requirements. So here we are explaining all the fields used in the xml of request body for api calls.

#### id_hotel
> **Required** : true
>
> **Description** : Id of the hotel which information you want to get from api request.

#### date_from
> **Required** : true
>
> **Description** : Check-in date of the booking duration.

#### date_to
> **Required** : true
>
> **Description** : Check-out date of the booking duration.

#### id_room_type
> **Required** : false
>
> **Description** : If you want information for only a particular room type of the hotel then send the id of that room type also.

#### get_available_rooms
> **Required** : false
>
> **Default value** : 0
>
> **Description** : If you do not want the information of available rooms in the response for your api request then include this field and send the value 1 for this field in the request xml. By default, only all available rooms data will be sent in the response.

#### get_booked_rooms
> **Required** : false
>
> **Default value** : 0
>
> **Description** : If you want the information of booked rooms in the response for your api request then include this field and send the value 1 for this field in the request xml. By default, only all available rooms data will be sent in the response.

#### get_partial_available_rooms
> **Required** : false
>
> **Default value** : 0
>
> **Description** : If you want the information of partially available rooms in the response for your api request then include this field and send the value 1 for this field in the request xml. By default, only all available rooms data will be sent in the response.

#### get_unavailable_rooms
> **Required** : false
>
> **Default value** : 0
>
> **Description** : If you want the information of unavailable rooms in the response for your api request then include this field and send the value 1 for this field in the request xml. By default, only all available rooms data will be sent in the response.

#### room_occupancies
> **Required** : false
>
> **Description** : Include this field and send the room_occupancies of the rooms in **< room_occupancy >** tag.
>
> Create a **< room_occupancy >** tag for every room room_occupancy information under **< room_occupancies >** tag. Send number of adults and children for room_occupancy of every room under **< room_occupancy >** tag.


### Get Availability & Rates information

#### Steps

To get information of availability & rates, follow the below steps.

- GET the XML blank schema for the api with url http://example.com/api/hotel_ari?ws_key=MNBDHALDK122DA879ADAD12ASKSK12W3&schema=blank
- Fill the blank schema with your data.
- Send HTTP POST request with the changed XML as body content to the api endpoint.

#### Request XML

Create request xml for the api according to your requirements. Request xml format for the api will be as below.

```xml
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <hotel_ari>
        <id_hotel>1</id_hotel>
        <date_from>2022-12-29</date_from>
        <date_to>2022-12-30</date_to>
        <get_available_rooms>1</get_available_rooms>
        <get_booked_rooms>1</get_booked_rooms>
        <get_partial_available_rooms>1</skip_partial_available_rooms>
        <get_unavailable_rooms>1</skip_unavailable_rooms>
        <associations>
            <room_occupancies>
                <room_occupancy>
                    <adults>2</adults>
                    <children>0</children>
                </room_occupancy>
                <room_occupancy>
                    <adults>3</adults>
                    <children>2</children>
                </room_occupancy>
            </room_occupancies>
        </associations>
    </hotel_ari>
</qloapps>
```
---

**NOTE**: You can get the response in XML or JSON format. Request XML will be same for both requests i.e. either you want the response in XML format or JSON format.

---

### Get response in XML

**Url**: http://example.com/api/hotel_ari?ws_key=MNBDHALDK122DA879ADAD12ASKSK12W3

**Method**: POST

**Request body**: Get the xml request body from [Request XML](https://devdocs.qloapps.com/webservice/advance-api-uses.html#request-xml) of api.

#### Response XML

Below is the full response in xml format for the api request.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
   <hotel_ari>
      <id_hotel xlink:href="http://192.168.15.85/hotelcommerce-api/api/hotels/1"><![CDATA[1]]></id_hotel>
      <date_from><![CDATA[2022-12-29]]></date_from>
      <date_to><![CDATA[2022-12-31]]></date_to>
      <currency><![CDATA[USD]]></currency>
      <total_rooms><![CDATA[10]]></total_rooms>
      <total_available_rooms><![CDATA[4]]></total_available_rooms>
      <total_unavailable_rooms><![CDATA[2]]></total_unavailable_rooms>
      <total_partial_available_rooms><![CDATA[2]]></total_partial_available_rooms>
      <total_booked_rooms><![CDATA[2]]></total_booked_rooms>
      <room_types>
         <room_type id="1" xlink:href="http://192.168.15.85/hotelcommerce-api/api/room_types/1">
            <id_room_type xlink:href="http://192.168.15.85/hotelcommerce-api/api/room_types/1"><![CDATA[1]]></id_room_type>
            <base_price>
                <![CDATA[1000]]>
            </base_price>
            <base_price_with_tax>
                <![CDATA[1200]]>
            </base_price_with_tax>
            <total_price>
                <![CDATA[2000]]>
            </total_price>
            <total_price_with_tax>
                <![CDATA[2400]]>
            </total_price_with_tax>
            <name>
                <language id="1" xlink:href="http://192.168.15.85/hotelcommerce-api/api/languages/1">
                    <![CDATA[General Rooms]]>
                </language>
                <language id="3" xlink:href="http://192.168.15.85/hotelcommerce-api/api/languages/3">
                    <![CDATA[General Rooms frr]]>
                </language>
            </name>
            <rooms>
               <available>
                  <room id="1">
                     <id_room><![CDATA[1]]></id_room>
                     <room_number><![CDATA[A-101]]></room_number>
                  </room>
                  <room id="2">
                     <id_room><![CDATA[2]]></id_room>
                     <room_number><![CDATA[A-102]]></room_number>
                  </room>
               </available>
               <unavailable>
                  <room id="3">
                     <id_room><![CDATA[3]]></id_room>
                     <room_number><![CDATA[A-105]]></room_number>
                  </room>
               </unavailable>
               <booked>
                  <room id="4">
                     <id_room><![CDATA[4]]></id_room>
                     <room_number><![CDATA[A-104]]></room_number>
                  </room>
               </booked>
               <partial_available>
                  <room id="5">
                     <id_room><![CDATA[5]]></id_room>
                     <room_number><![CDATA[A-103]]></room_number>
                  </room>
               </partial_available>
            </rooms>
         </room_type>
         <room_type id="2" xlink:href="http://192.168.15.85/hotelcommerce-api/api/room_types/2">
            <id_room_type xlink:href="http://192.168.15.85/hotelcommerce-api/api/room_types/2"><![CDATA[2]]></id_room_type>
            <base_price>
                <![CDATA[1500]]>
            </base_price>
            <base_price_with_tax>
                <![CDATA[1800]]>
            </base_price_with_tax>
            <total_price>
                <![CDATA[3000]]>
            </total_price>
            <total_price_with_tax>
                <![CDATA[3600]]>
            </total_price_with_tax>
            <name>
                <language id="1" xlink:href="http://192.168.15.85/hotelcommerce-api/api/languages/1">
                    <![CDATA[Delux Rooms]]>
                </language>
                <language id="3" xlink:href="http://192.168.15.85/hotelcommerce-api/api/languages/3">
                    <![CDATA[Delux Rooms frr]]>
                </language>
            </name>
            <rooms>
               <available>
                  <room id="6">
                     <id_room><![CDATA[6]]></id_room>
                     <room_number><![CDATA[A-101]]></room_number>
                  </room>
                  <room id="7">
                     <id_room><![CDATA[7]]></id_room>
                     <room_number><![CDATA[A-102]]></room_number>
                  </room>
               </available>
               <unavailable>
                  <room id="8">
                     <id_room><![CDATA[8]]></id_room>
                     <room_number><![CDATA[A-103]]></room_number>
                  </room>
               </unavailable>
               <booked>
                  <room id="9">
                     <id_room><![CDATA[9]]></id_room>
                     <room_number><![CDATA[A-104]]></room_number>
                  </room>
               </booked>
               <partial_available>
                  <room id="10">
                     <id_room><![CDATA[10]]></id_room>
                     <room_number><![CDATA[A-105]]></room_number>
                  </room>
               </partial_available>
            </rooms>
         </room_type>
      </room_types>
   </hotel_ari>
</qloapps>
```

### Get response in JSON

**Url**: http://example.com/api/hotel_ari?ws_key=MNBDHALDK122DA879ADAD12ASKSK12W3&output_format=JSON

**Method**: POST

**Request body**: Get the request xml body content from [Request XML](https://devdocs.qloapps.com/webservice/advance-api-uses.html#request-xml) of api.

#### Response JSON
Below is the full response in json format for the api request.

```json
{
   "hotel_ari": {
      "id_hotel": "1",
      "date_from": "2022-12-29",
      "date_to": "2022-12-30",
      "currency": "USD",
      "total_rooms": 10,
      "total_available_rooms": 4,
      "total_unavailable_rooms": 2,
      "total_partial_available_rooms": 2,
      "total_booked_rooms": 2,
      "room_types": [
         {
            "id_room_type": 1,
            "base_price": 1000,
            "base_price_with_tax": 1200,
            "total_price": 2000,
            "total_price_with_tax": 2400,
            "name": [
                {
                    "id": "1",
                    "value": "General Rooms"
                },
                {
                    "id": "3",
                    "value": "General Rooms Fr"
                }
            ],
            "rooms": {
               "available": [
                  {
                     "id_room": "1",
                     "room_number": "A-101"
                  },
                  {
                     "id_room": "2",
                     "room_number": "A-102"
                  }
               ],
               "unavailable": [
                  {
                     "id_room": "3",
                     "room_number": "A-103"
                  }
               ],
               "booked": [
                  {
                     "id_room": "4",
                     "room_number": "A-104"
                  }
               ],
               "partially_available": [
                  {
                     "id_room": "5",
                     "room_number": "A-105"
                  }
               ]
            }
         },
         {
            "id_room_type": 2,
            "base_price": 1500,
            "base_price_with_tax": 1800,
            "total_price": 3000,
            "total_price_with_tax": 3600,
            "name": [
                {
                    "id": "1",
                    "value": "Delux Rooms"
                },
                {
                    "id": "3",
                    "value": "Delux Rooms Fr"
                }
            ],
            "rooms": {
               "available": [
                  {
                     "id_room": "6",
                     "room_number": "A-101"
                  },
                  {
                     "id_room": "7",
                     "room_number": "A-102"
                  }
               ],
               "unavailable": [
                  {
                     "id_room": "9",
                     "room_number": "A-104"
                  }
               ],
               "booked": [
                  {
                     "id_room": "9",
                     "room_number": "A-104"
                  }
               ],
               "partially_available": [
                  {
                     "id_room": "10",
                     "room_number": "A-105"
                  }
               ]
            }
         }
      ]
   }
}
```