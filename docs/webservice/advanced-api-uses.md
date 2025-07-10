# Advanced API Uses

In this section, we will explore some advanced topics of QloApps Webservice APIs.

Read all the subtopics under this section to understand the advanced uses of web services in detail.


## GET Advanced Parameters

There are some advanced GET parameters to your request. So that you can modify the READ response.

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
Here we will understand the whole process (create/update) with the example of global configuration **PS_LANG_DEFAULT** which contains the default language of the website in the back office.

---
- Global configurations are stored in the **_PREFIX_configuration** table in QloApps.
- You can get the configuration value by Configuration::get('PS_LANG_DEFAULT').
- You can save the configuration value by Configuration::updateValue('PS_LANG_DEFAULT', 3).
---


#### Check the configuration existence

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

</br>

## Availability & Rates search API

QloApps provides an advance API for getting availability and rates information of a hotel with multiple search parameters in the api request.

With the help of this api, you can get the information of the inventories and rates of room types for the requested hotel/property and a date duration. You can also filter results according to the available parameters in the request.

There are two methods available for getting availability and rates:

1. [**Get Availability & Rates information for Entire Date Range**](https://devdocs.qloapps.com/webservice/advanced-api-uses.html#get-availability--rates-information-for-entire-date-range) : To get availability & rates infomation for the entire requested date range

2. [**Get Availability & Rates information with Date Wise Break-down**](https://devdocs.qloapps.com/webservice/advanced-api-uses.html#get-availability--rates-information-with-date-wise-break-down) : To get information of availability & rates for every date(Date wise breakdowm) in the requested date range


### API endpoint

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
        <date_wise_breakdown></date_wise_breakdown>
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
        <date_wise_breakdown format="isBool"></date_wise_breakdown>
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

#### date_wise_breakdown
> **Required** : false
>
> **Default value** : 0
>
> **Description** : If you want availability and rates information for all the dates individually in the provided date range then include this field and send the value 1 for this field in the request xml. By default, availability and rates information for entire date range will be sent in the response.

#### room_occupancies
> **Required** : false
>
> **Description** : Include this field and send the room_occupancies of the rooms in **< room_occupancy >** tag.
>
> Create a **< room_occupancy >** tag for every room room_occupancy information under **< room_occupancies >** tag. Send number of adults and children for room_occupancy of every room under **< room_occupancy >** tag.

<br/>

### Get Availability & Rates information for Entire Date Range

Use this method to get availability & rates information for the entire requested date range.

#### Steps

Follow the below steps.

- GET the XML blank schema for the api with url http://example.com/api/hotel_ari?ws_key=MNBDHALDK122DA879ADAD12ASKSK12W3&schema=blank
- Fill the blank schema with your data.
- Send HTTP POST request with the changed XML as body content to the api endpoint.
- No need to send **`<date_wise_breakdown>`** node in the request XML to get availability and rates for entire date range.

#### Request XML

Create request xml for the api according to your requirements. Request xml format for the api will be as below.

```xml
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <hotel_ari>
        <id_hotel>1</id_hotel>
        <date_from>2022-12-28</date_from>
        <date_to>2022-12-30</date_to>
        <get_available_rooms>1</get_available_rooms>
        <get_booked_rooms>1</get_booked_rooms>
        <get_partial_available_rooms>1</get_partial_available_rooms>
        <get_unavailable_rooms>1</get_unavailable_rooms>
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

**Request body**: Get the xml request body from [Request XML](https://devdocs.qloapps.com/webservice/advanced-api-uses.html#request-xml) of api.

#### Response XML

Below is the full response in xml format for the api request.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <hotel_ari>
        <id_hotel xlink:href="http://example.com/hotelcommerce-api/api/hotels/1">
            <![CDATA[1]]>
        </id_hotel>
        <date_from>
            <![CDATA[2022-12-28]]>
        </date_from>
        <date_to>
            <![CDATA[2022-12-30]]>
        </date_to>
        <currency>
            <![CDATA[USD]]>
        </currency>
        <total_rooms>
            <![CDATA[10]]>
        </total_rooms>
        <total_available_rooms>
            <![CDATA[4]]>
        </total_available_rooms>
        <total_unavailable_rooms>
            <![CDATA[2]]>
        </total_unavailable_rooms>
        <total_partial_available_rooms>
            <![CDATA[4]]>
        </total_partial_available_rooms>
        <total_booked_rooms>
            <![CDATA[2]]>
        </total_booked_rooms>
        <room_types>
            <room_type id="1" xlink:href="http://example.com/hotelcommerce-api/api/room_types/1">
                <id_room_type xlink:href="http://example.com/hotelcommerce-api/api/room_types/1">
                    <![CDATA[1]]>
                </id_room_type>
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
                    <language id="1" xlink:href="http://example.com/hotelcommerce-api/api/languages/1">
                        <![CDATA[General Rooms]]>
                    </language>
                    <language id="3" xlink:href="http://example.com/hotelcommerce-api/api/languages/3">
                        <![CDATA[General Rooms frr]]>
                    </language>
                </name>
                <rooms>
                    <available>
                        <room id="1">
                            <id_room>
                                <![CDATA[1]]>
                            </id_room>
                            <room_number>
                                <![CDATA[A-101]]>
                            </room_number>
                        </room>
                        <room id="2">
                            <id_room>
                                <![CDATA[2]]>
                            </id_room>
                            <room_number>
                                <![CDATA[A-102]]>
                            </room_number>
                        </room>
                    </available>
                    <unavailable>
                        <room id="3">
                            <id_room>
                                <![CDATA[3]]>
                            </id_room>
                            <room_number>
                                <![CDATA[A-103]]>
                            </room_number>
                        </room>
                    </unavailable>
                    <booked>
                        <room id="4">
                            <id_room>
                                <![CDATA[4]]>
                            </id_room>
                            <room_number>
                                <![CDATA[A-104]]>
                            </room_number>
                        </room>
                    </booked>
                    <partial_available>
                        <rooms date_from="2022-12-29" date_to="2022-12-30">
                            <room id="5">
                                <id_room>
                                    <![CDATA[5]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[A-105]]>
                                </room_number>
                            </room>
                        </rooms>
                        <rooms date_from="2022-12-30" date_to="2022-12-31">
                            <room id="6">
                                <id_room>
                                    <![CDATA[6]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[A-106]]>
                                </room_number>
                            </room>
                        </rooms>
                    </partial_available>
                </rooms>
            </room_type>
            <room_type id="2" xlink:href="http://example.com/hotelcommerce-api/api/room_types/2">
                <id_room_type xlink:href="http://example.com/hotelcommerce-api/api/room_types/2">
                    <![CDATA[2]]>
                </id_room_type>
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
                    <language id="1" xlink:href="http://example.com/hotelcommerce-api/api/languages/1">
                        <![CDATA[Delux Rooms]]>
                    </language>
                    <language id="2" xlink:href="http://example.com/hotelcommerce-api/api/languages/2">
                        <![CDATA[Delux Rooms frr]]>
                    </language>
                </name>
                <rooms>
                    <available>
                        <room id="7">
                            <id_room>
                                <![CDATA[7]]>
                            </id_room>
                            <room_number>
                                <![CDATA[B-101]]>
                            </room_number>
                        </room>
                        <room id="8">
                            <id_room>
                                <![CDATA[8]]>
                            </id_room>
                            <room_number>
                                <![CDATA[B-102]]>
                            </room_number>
                        </room>
                    </available>
                    <unavailable>
                        <room id="9">
                            <id_room>
                                <![CDATA[9]]>
                            </id_room>
                            <room_number>
                                <![CDATA[B-103]]>
                            </room_number>
                        </room>
                    </unavailable>
                    <booked>
                        <room id="10">
                            <id_room>
                                <![CDATA[10]]>
                            </id_room>
                            <room_number>
                                <![CDATA[B-104]]>
                            </room_number>
                        </room>
                    </booked>
                    <partial_available>
                        <rooms date_from="2022-12-29" date_to="2022-12-30">
                            <room id="11">
                                <id_room>
                                    <![CDATA[11]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[B-105]]>
                                </room_number>
                            </room>
                        </rooms>
                        <rooms date_from="2022-12-30" date_to="2022-12-31">
                            <room id="12">
                                <id_room>
                                    <![CDATA[12]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[B-106]]>
                                </room_number>
                            </room>
                        </rooms>
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

**Request body**: Get the request xml body content from [Request XML](https://devdocs.qloapps.com/webservice/advanced-api-uses.html#request-xml) of api.

#### Response JSON
Below is the full response in json format for the api request.

```json
{
   "hotel_ari": {
        "id_hotel": "1",
        "date_from": "2022-12-28",
        "date_to": "2022-12-30",
        "currency": "USD",
        "total_rooms": 10,
        "total_available_rooms": 4,
        "total_unavailable_rooms": 2,
        "total_partial_available_rooms": 4,
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
                        "id": "2",
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
                            "date_from": "2022-12-29",
                            "date_to": "2022-12-30",
                            "rooms": [
                                {
                                "id_room": "5",
                                "room_number": "A-105"
                                }
                            ]
                        },
                        {
                            "date_from": "2022-12-30",
                            "date_to": "2022-12-31",
                            "rooms": [
                                {
                                "id_room": "6",
                                "room_number": "A-106"
                                }
                            ]
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
                            "id_room": "7",
                            "room_number": "B-101"
                        },
                        {
                            "id_room": "8",
                            "room_number": "B-102"
                        }
                    ],
                    "unavailable": [
                        {
                            "id_room": "9",
                            "room_number": "B-103"
                        }
                    ],
                    "booked": [
                        {
                            "id_room": "10",
                            "room_number": "B-104"
                        }
                    ],
                    "partially_available": [
                        {
                            "date_from": "2022-12-29",
                            "date_to": "2022-12-30",
                            "rooms": [
                                {
                                "id_room": "11",
                                "room_number": "B-105"
                                }
                            ]
                        },
                        {
                            "date_from": "2022-12-30",
                            "date_to": "2022-12-31",
                            "rooms": [
                                {
                                "id_room": "12",
                                "room_number": "B-106"
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    }
}
```

<br/>

### Get Availability & Rates information with Date Wise Break-down

Use this method to get availability & rates information for every date(Date wise breakdowm) in the requested date range.

#### Steps

Follow the below steps.

- GET the XML blank schema for the api with url http://example.com/api/hotel_ari?ws_key=MNBDHALDK122DA879ADAD12ASKSK12W3&schema=blank
- Fill the blank schema with your data.
- Send **`<date_wise_breakdown>` node value to 1** in the request XML to get availability and rates for every date in the date range.
- Send HTTP POST request with the changed XML as body content to the api endpoint.

#### Request XML for date wise breakdown

Create request xml for the api according to your requirements. Request xml format for the api will be as below.

```xml
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <hotel_ari>
        <id_hotel>1</id_hotel>
        <date_from>2022-12-28</date_from>
        <date_to>2022-12-30</date_to>
        <get_available_rooms>1</get_available_rooms>
        <get_booked_rooms>1</get_booked_rooms>
        <get_unavailable_rooms>1</get_unavailable_rooms>
        <date_wise_breakdown>1</date_wise_breakdown>
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

---

**NOTE**: **`<partial_available>`** node will not be present in the response for **date_wise_breakdown** (Date Wise Breakdown) requests. Because availability and rates will be sent individually for every date and for a single day, there is no use of partial available rooms.

---

### Get response in XML

**Url**: http://example.com/api/hotel_ari?ws_key=MNBDHALDK122DA879ADAD12ASKSK12W3

**Method**: POST

**Request body**: Get the xml request body from [Request XML for date wise breakdown](https://devdocs.qloapps.com/webservice/advanced-api-uses.html##request-xml-for-date-wise-breakdown) of api.

#### Response XML

Below is the full response in xml format for the api request.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <hotel_aris>
        <hotel_ari>
            <id_hotel xlink:href="http://example.com/hotelcommerce-ari/api/hotels/1">
                <![CDATA[1]]>
            </id_hotel>
            <date_from>
                <![CDATA[2022-12-28]]>
            </date_from>
            <date_to>
                <![CDATA[2022-12-29]]>
            </date_to>
            <currency>
                <![CDATA[EUR]]>
            </currency>
            <total_rooms>
                <![CDATA[10]]>
            </total_rooms>
            <total_available_rooms>
                <![CDATA[6]]>
            </total_available_rooms>
            <total_unavailable_rooms>
                <![CDATA[2]]>
            </total_unavailable_rooms>
            <total_booked_rooms>
                <![CDATA[2]]>
            </total_booked_rooms>
            <room_types>
                <room_type id="1" xlink:href="http://example.com/hotelcommerce-ari/api/room_types/1">
                    <id_room_type xlink:href="http://example.com/hotelcommerce-ari/api/room_types/1">
                        <![CDATA[1]]>
                    </id_room_type>
                    <base_price>
                        <![CDATA[1000]]>
                    </base_price>
                    <base_price_with_tax>
                        <![CDATA[1200]]>
                    </base_price_with_tax>
                    <total_price>
                        <![CDATA[1000]]>
                    </total_price>
                    <total_price_with_tax>
                        <![CDATA[1200]]>
                    </total_price_with_tax>
                    <name>
                        <language id="1" xlink:href="http://example.com/hotelcommerce-ari/api/languages/1">
                            <![CDATA[General Rooms]]>
                        </language>
                        <language id="4" xlink:href="http://example.com/hotelcommerce-ari/api/languages/4">
                            <![CDATA[General Rooms]]>
                        </language>
                    </name>
                    <rooms>
                        <unavailable>
                            <room id="4">
                                <id_room>
                                    <![CDATA[4]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[A-104]]>
                                </room_number>
                            </room>
                        </unavailable>
                        <booked>
                            <room id="1">
                                <id_room>
                                    <![CDATA[1]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[A-101]]>
                                </room_number>
                            </room>
                        </booked>
                        <available>
                            <room id="2">
                                <id_room>
                                    <![CDATA[2]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[A-102]]>
                                </room_number>
                            </room>
                            <room id="3">
                                <id_room>
                                    <![CDATA[3]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[A-103]]>
                                </room_number>
                            </room>
                            <room id="5">
                                <id_room>
                                    <![CDATA[5]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[A-105]]>
                                </room_number>
                            </room>
                        </available>
                    </rooms>
                </room_type>
                <room_type id="2" xlink:href="http://example.com/hotelcommerce-ari/api/room_types/2">
                    <id_room_type xlink:href="http://example.com/hotelcommerce-ari/api/room_types/2">
                        <![CDATA[2]]>
                    </id_room_type>
                    <base_price>
                        <![CDATA[1500]]>
                    </base_price>
                    <base_price_with_tax>
                        <![CDATA[1800]]>
                    </base_price_with_tax>
                    <total_price>
                        <![CDATA[1500]]>
                    </total_price>
                    <total_price_with_tax>
                        <![CDATA[1800]]>
                    </total_price_with_tax>
                    <name>
                        <language id="1" xlink:href="http://example.com/hotelcommerce-ari/api/languages/1">
                            <![CDATA[Delux Rooms]]>
                        </language>
                        <language id="4" xlink:href="http://example.com/hotelcommerce-ari/api/languages/4">
                            <![CDATA[Delux Rooms]]>
                        </language>
                    </name>
                    <rooms>
                        <unavailable>
                            <room id="9">
                                <id_room>
                                    <![CDATA[9]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[B-104]]>
                                </room_number>
                            </room>
                        </unavailable>
                        <booked>
                            <room id="6">
                                <id_room>
                                    <![CDATA[6]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[B-101]]>
                                </room_number>
                            </room>
                        </booked>
                        <available>
                            <room id="7">
                                <id_room>
                                    <![CDATA[7]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[B-102]]>
                                </room_number>
                            </room>
                            <room id="8">
                                <id_room>
                                    <![CDATA[8]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[B-103]]>
                                </room_number>
                            </room>
                            <room id="10">
                                <id_room>
                                    <![CDATA[10]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[B-105]]>
                                </room_number>
                            </room>
                        </available>
                    </rooms>
                </room_type>
            </room_types>
        </hotel_ari>
        <hotel_ari>
            <id_hotel xlink:href="http://example.com/hotelcommerce-ari/api/hotels/1">
                <![CDATA[1]]>
            </id_hotel>
            <date_from>
                <![CDATA[2022-12-29]]>
            </date_from>
            <date_to>
                <![CDATA[2022-12-30]]>
            </date_to>
            <currency>
                <![CDATA[EUR]]>
            </currency>
            <total_rooms>
                <![CDATA[10]]>
            </total_rooms>
            <total_available_rooms>
                <![CDATA[4]]>
            </total_available_rooms>
            <total_unavailable_rooms>
                <![CDATA[2]]>
            </total_unavailable_rooms>
            <total_booked_rooms>
                <![CDATA[4]]>
            </total_booked_rooms>
            <room_types>
                <room_type id="1" xlink:href="http://example.com/hotelcommerce-ari/api/room_types/1">
                    <id_room_type xlink:href="http://example.com/hotelcommerce-ari/api/room_types/1">
                        <![CDATA[1]]>
                    </id_room_type>
                    <base_price>
                        <![CDATA[1000]]>
                    </base_price>
                    <base_price_with_tax>
                        <![CDATA[1200]]>
                    </base_price_with_tax>
                    <total_price>
                        <![CDATA[1000]]>
                    </total_price>
                    <total_price_with_tax>
                        <![CDATA[1200]]>
                    </total_price_with_tax>
                    <name>
                        <language id="1" xlink:href="http://example.com/hotelcommerce-ari/api/languages/1">
                            <![CDATA[General Rooms]]>
                        </language>
                        <language id="4" xlink:href="http://example.com/hotelcommerce-ari/api/languages/4">
                            <![CDATA[General Rooms]]>
                        </language>
                    </name>
                    <rooms>
                        <unavailable>
                            <room id="3">
                                <id_room>
                                    <![CDATA[3]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[A-103]]>
                                </room_number>
                            </room>
                        </unavailable>
                        <booked>
                            <room id="2">
                                <id_room>
                                    <![CDATA[2]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[A-102]]>
                                </room_number>
                            </room>
                            <room id="5">
                                <id_room>
                                    <![CDATA[5]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[A-105]]>
                                </room_number>
                            </room>
                        </booked>
                        <available>
                            <room id="1">
                                <id_room>
                                    <![CDATA[1]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[A-101]]>
                                </room_number>
                            </room>
                            <room id="4">
                                <id_room>
                                    <![CDATA[4]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[A-104]]>
                                </room_number>
                            </room>
                        </available>
                    </rooms>
                </room_type>
                <room_type id="2" xlink:href="http://example.com/hotelcommerce-ari/api/room_types/2">
                    <id_room_type xlink:href="http://example.com/hotelcommerce-ari/api/room_types/2">
                        <![CDATA[2]]>
                    </id_room_type>
                    <base_price>
                        <![CDATA[1500]]>
                    </base_price>
                    <base_price_with_tax>
                        <![CDATA[1800]]>
                    </base_price_with_tax>
                    <total_price>
                        <![CDATA[1500]]>
                    </total_price>
                    <total_price_with_tax>
                        <![CDATA[1800]]>
                    </total_price_with_tax>
                    <name>
                        <language id="1" xlink:href="http://example.com/hotelcommerce-ari/api/languages/1">
                            <![CDATA[Delux Rooms]]>
                        </language>
                        <language id="4" xlink:href="http://example.com/hotelcommerce-ari/api/languages/4">
                            <![CDATA[Delux Rooms]]>
                        </language>
                    </name>
                    <rooms>
                        <unavailable>
                            <room id="8">
                                <id_room>
                                    <![CDATA[8]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[B-103]]>
                                </room_number>
                            </room>
                        </unavailable>
                        <booked>
                            <room id="6">
                                <id_room>
                                    <![CDATA[6]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[B-101]]>
                                </room_number>
                            </room>
                            <room id="7">
                                <id_room>
                                    <![CDATA[7]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[B-102]]>
                                </room_number>
                            </room>
                        </booked>
                        <available>
                            <room id="9">
                                <id_room>
                                    <![CDATA[9]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[B-104]]>
                                </room_number>
                            </room>
                            <room id="10">
                                <id_room>
                                    <![CDATA[10]]>
                                </id_room>
                                <room_number>
                                    <![CDATA[B-105]]>
                                </room_number>
                            </room>
                        </available>
                    </rooms>
                </room_type>
            </room_types>
        </hotel_ari>
    </hotel_aris>
</qloapps>
```

### Get response in JSON

**Url**: http://example.com/api/hotel_ari?ws_key=MNBDHALDK122DA879ADAD12ASKSK12W3&output_format=JSON

**Method**: POST

**Request body**: Get the request xml body content from [Request XML for date wise breakdown](https://devdocs.qloapps.com/webservice/advanced-api-uses.html#request-xml-for-date-wise-breakdown) of api.

#### Response JSON
Below is the full response in json format for the api request.

```json
{
	"hotel_aris": [
		{
			"id_hotel": "1",
			"date_from": "2022-12-28",
			"date_to": "2022-12-29",
			"currency": "EUR",
			"total_rooms": 10,
			"total_available_rooms": 6,
			"total_unavailable_rooms": 2,
			"total_booked_rooms": 2,
			"room_types": [
				{
					"id_room_type": "1",
					"base_price": 1000,
					"base_price_with_tax": 1200,
					"total_price": 1000,
					"total_price_with_tax": 1200,
					"name": [
						{
							"id": "1",
							"value": "General Rooms"
						},
						{
							"id": "4",
							"value": "General Rooms"
						}
					],
					"rooms": {
						"unavailable": [
							{
								"id_room": "4",
								"room_number": "A-104"
							}
						],
						"booked": [
							{
								"id_room": "1",
								"room_number": "A-101"
							}
						],
						"available": [
							{
								"id_room": "2",
								"room_number": "A-102"
							},
							{
								"id_room": "3",
								"room_number": "A-103"
							},
							{
								"id_room": "5",
								"room_number": "A-105"
							}
						]
					}
				},
				{
					"id_room_type": "2",
					"base_price": 1500,
					"base_price_with_tax": 1800,
					"total_price": 1500,
					"total_price_with_tax": 1800,
					"name": [
						{
							"id": "1",
							"value": "Delux Rooms"
						},
						{
							"id": "4",
							"value": "Delux Rooms"
						}
					],
					"rooms": {
						"unavailable": [
							{
								"id_room": "9",
								"room_number": "B-104"
							}
						],
						"booked": [
							{
								"id_room": "6",
								"room_number": "B-101"
							}
						],
						"available": [
							{
								"id_room": "7",
								"room_number": "B-102"
							},
							{
								"id_room": "8",
								"room_number": "B-103"
							},
							{
								"id_room": "10",
								"room_number": "B-105"
							},
							{
								"id_room": "8",
								"room_number": "B-103"
							}
						]
					}
				}
			]
		},
		{
			"id_hotel": "1",
			"date_from": "2022-12-29",
			"date_to": "2022-12-30",
			"currency": "EUR",
			"total_rooms": 10,
			"total_available_rooms": 4,
			"total_unavailable_rooms": 2,
			"total_booked_rooms": 4,
			"room_types": [
				{
					"id_room_type": "1",
					"base_price": 1000,
					"base_price_with_tax": 1200,
					"total_price": 1000,
					"total_price_with_tax": 1200,
					"name": [
						{
							"id": "1",
							"value": "General Rooms"
						},
						{
							"id": "4",
							"value": "General Rooms"
						}
					],
					"rooms": {
						"unavailable": [
							{
								"id_room": "3",
								"room_number": "A-103"
							}
						],
						"booked": [
							{
								"id_room": "2",
								"room_number": "A-102"
							},
							{
								"id_room": "5",
								"room_number": "A-105"
							}
						],
						"available": [
							{
								"id_room": "1",
								"room_number": "A-101"
							},
							{
								"id_room": "4",
								"room_number": "A-104"
							}
						]
					}
				},
				{
					"id_room_type": "2",
					"base_price": 1500,
					"base_price_with_tax": 1800,
					"total_price": 1500,
					"total_price_with_tax": 1800,
					"name": [
						{
							"id": "1",
							"value": "Delux Rooms"
						},
						{
							"id": "4",
							"value": "Delux Rooms"
						}
					],
					"rooms": {
						"unavailable": [
							{
								"id_room": "8",
								"room_number": "B-103"
							}
						],
						"booked": [
							{
								"id_room": "6",
								"room_number": "B-101"
							},
							{
								"id_room": "7",
								"room_number": "B-102"
							}
						],
						"available": [
							{
								"id_room": "9",
								"room_number": "B-104"
							},
							{
								"id_room": "10",
								"room_number": "B-105"
							}
						]
					}
				}
			]
		}
	]
}
```


## Bookings API

QloApps provides an advance API for creating and getting a booking.

### API endpoint

If QloApps is launched at url http://example.com then endpoint of the bookings api will be :

**http://example.com/api/bookings**

---

**NOTE**: Replace **domain** and **webservice api key** in the documentaion with your domain and api key while making api requests.

---

### Schema

Suppose your webservice access api key is MNBDHALDK122DA879ADAD12ASKSK12W3. Then schema of the api can be fetched from below request parameters:

**Url**: http://example.com/api/bookings?ws_key=MNBDHALDK122DA879ADAD12ASKSK12W3&schema=blank

**Method**: GET

#### Schema Format

After requesting for the schema, you will get below format of the schema of the availability & rates search api.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <booking>
        <id/>
        <id_property/>
        <currency/>
        <booking_status/>
        <payment_status/>
        <source/>
        <booking_date/>
        <remark/>
        <id_language/>
        <associations>
            <customer_detail>
                <id_customer/>
                <firstname/>
                <lastname/>
                <email/>
                <phone/>
                <address/>
                <city/>
                <zip/>
                <state_code/>
                <country_code/>
            </customer_detail>
            <price_details>
                <total_paid/>
                <total_price_with_tax/>
            </price_details>
            <payment_detail>
                <payment_type/>
                <payment_method/>
                <transaction_id/>
            </payment_detail>
            <cart_rules>
                <cart_rule>
                    <name/>
                    <code/>
                    <type/>
                    <value/>
                    <currency/>
                </cart_rule>
            </cart_rules>
            <room_types>
                <room_type>
                <id_room_type/>
                <checkin_date/>
                <checkout_date/>
                <number_of_rooms/>
                    <rooms>
                        <room>
                            <id_room/>
                            <adults/>
                            <child/>
                            <child_ages/>
                            <unit_price_without_tax/>
                            <id_tax_rules_group/>
                            <total_tax/>
                            <services>
                                <service>
                                    <id_service/>
                                    <quantity/>
                                    <price_mode/>
                                    <name/>
                                    <unit_price_without_tax/>
                                    <total_price_without_tax/>
                                    <id_tax_rules_group/>
                                    <total_tax/>
                                </service>
                            </services>
                            <facilities>
                                <facility>
                                    <id_facility/>
                                    <id_option/>
                                    <name/>
                                    <unit_price_without_tax/>
                                    <id_tax_rules_group/>
                                </facility>
                            </facilities>
                        </room>
                    </rooms>
                </room_type>
            </room_types>
        </associations>
    </booking>
</qloapps>
```

### Synopsis

The synopsis of the API can be fetched from below request parameters:

**Url**: http://example.com/api/bookings?ws_key=MNBDHALDK122DA879ADAD12ASKSK12W3&schema=synopsis

**Method**: GET

#### Synopsis Format

After requesting for the synopsis, you will get below format of the synopsis of the availability & rates search api.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <booking>
        <id_property required="true"/>
        <currency/>
        <booking_status required="true"/>
        <payment_status required="true"/>
        <source/>
        <booking_date/>
        <remark/>
        <id_language/>
        <associations>
            <customer_detail api="customer_detail">
                <id_customer/>
                <firstname required="true"/>
                <lastname required="true"/>
                <email required="true"/>
                <phone required="true"/>
                <address/>
                <city/>
                <zip/>
                <state_code/>
                <country_code/>
            </customer_detail>
            <price_details api="price_details">
                <total_paid/>
                <total_price_with_tax/>
            </price_details>
            <payment_detail api="payment_detail">
                <payment_type/>
                <payment_method/>
                <transaction_id/>
            </payment_detail>
            <cart_rules nodeType="cart_rule" api="cart_rules">
                <cart_rule>
                    <name/>
                    <code/>
                    <type/>
                    <value/>
                    <currency/>
                </cart_rule>
            </cart_rules>
            <room_types nodeType="room_type" api="room_types">
                <room_type>
                    <id_room_type required="true"/>
                    <checkin_date required="true"/>
                    <checkout_date required="true"/>
                    <number_of_rooms required="true"/>
                    <rooms>
                        <room>
                            <id_room/>
                            <adults/>
                            <child/>
                            <child_ages/>
                            <unit_price_without_tax/>
                            <id_tax_rules_group/>
                            <total_tax/>
                            <services>
                                <service>
                                    <id_service/>
                                    <quantity/>
                                    <price_mode/>
                                    <name/>
                                    <unit_price_without_tax/>
                                    <total_price_without_tax/>
                                    <id_tax_rules_group/>
                                    <total_tax/>
                                </service>
                            </services>
                            <facilities>
                                <facility>
                                    <id_facility/>
                                    <id_option/>
                                    <name/>
                                    <unit_price_without_tax/>
                                    <id_tax_rules_group/>
                                </facility>
                            </facilities>
                        </room>
                    </rooms>
                </room_type>
            </room_types>
        </associations>
    </booking>
</qloapps>
```

### Schema / Synopsis Xml field details
To create a booking you have to fill the blank schema with your data according to your requirements. So here we are explaining all the fields used in the xml of request body for api calls.

#### id_property
> **Required** : true
>
> **Description** : Id of the property/hotel for which you want to create the boooking using the api request.

#### booking_status
> **Required** : true
>
> **Description** : booking status new = 1, completed = 2, cancelled = 3 and refunded = 4.

#### payment_status
> **Required** : true
>
> **Description** : status of the payement completed = 1, partial = 2 and awating = 3, for these the booking status needs to be 1(new).

#### customer_detail
> **Required** : true
>
> **Description** : customer details such as firstname, lastname, email and phone are required or a valid id_customer can be used instead.

#### room_types
> **Required** : true
>
> **Description** : This includes the booking information for the room type, such as id_room_type, check-in date, check-out date and number of rooms.

<br/>

### Get booking Information

Use this method to get the booking details.

---

### Get response in XML

**Url**: http://example.com/api/bookings/1?ws_key=MNBDHALDK122DA879ADAD12ASKSK12W3

**Method**: GET

#### Response XML

Below is the full response in xml format for the api request.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<qloapps xmlns:xlink="http://www.w3.org/1999/xlink">
    <booking>
        <id>
            <![CDATA[ 1 ]]>
        </id>
        <id_property>
            <![CDATA[ 1 ]]>
        </id_property>
        <currency>
            <![CDATA[ USD ]]>
        </currency>
        <source>
            <![CDATA[ qloapps.com ]]>
        </source>
        <booking_date>
            <![CDATA[ 2025-07-10 11:59:24 ]]>
        </booking_date>
        <id_language>
            <![CDATA[ 1 ]]>
        </id_language>
        <associations>
            <customer_detail>
                <id_customer>
                    <![CDATA[ 1 ]]>
                </id_customer>
                <firstname>
                    <![CDATA[ John ]]>
                </firstname>
                <lastname>
                    <![CDATA[ Doe ]]>
                </lastname>
                <email>
                    <![CDATA[ pub@qloapps.com ]]>
                </email>
                <phone>
                    <![CDATA[ 1234567890 ]]>
                </phone>
            </customer_detail>
            <price_details>
                <total_paid>
                    <![CDATA[ 1125 ]]>
                </total_paid>
                <total_price_without_tax>
                    <![CDATA[ 1000 ]]>
                </total_price_without_tax>
                <total_tax>
                    <![CDATA[ 125 ]]>
                </total_tax>
            </price_details>
            <cart_rules>
                <![CDATA[ 0 ]]>
            </cart_rules>
            <remarks>
                <remark>
                    <![CDATA[ Manual order -- Employee: D. Demo ]]>
                </remark>
            </remarks>
            <room_types>
                <room_type>
                    <id_room_type>
                        <![CDATA[ 1 ]]>
                    </id_room_type>
                    <checkin_date>
                        <![CDATA[ 2025-07-08 00:00:00 ]]>
                    </checkin_date>
                    <checkout_date>
                        <![CDATA[ 2025-07-09 00:00:00 ]]>
                    </checkout_date>
                    <total_tax>
                        <![CDATA[ 112.5 ]]>
                    </total_tax>
                    <number_of_rooms>
                        <![CDATA[ 1 ]]>
                    </number_of_rooms>
                    <name>
                        <![CDATA[ General Rooms ]]>
                    </name>
                    <rooms>
                        <room>
                            <id_room>
                                <![CDATA[ 1 ]]>
                            </id_room>
                            <id_hotel_booking>
                                <![CDATA[ 1 ]]>
                            </id_hotel_booking>
                            <adults>
                                <![CDATA[ 1 ]]>
                            </adults>
                            <child>
                                <![CDATA[ 0 ]]>
                            </child>
                            <unit_price_without_tax>
                                <![CDATA[ 900 ]]>
                            </unit_price_without_tax>
                            <total_tax>
                                <![CDATA[ 112.5 ]]>
                            </total_tax>
                            <services>
                                <service>
                                    <id_service>
                                        <![CDATA[ 11 ]]>
                                    </id_service>
                                    <name>
                                        <![CDATA[ Transport ]]>
                                    </name>
                                    <quantity>
                                        <![CDATA[ 1 ]]>
                                    </quantity>
                                    <unit_price_without_tax>
                                        <![CDATA[ 100 ]]>
                                    </unit_price_without_tax>
                                    <total_price_without_tax>
                                        <![CDATA[ 100 ]]>
                                    </total_price_without_tax>
                                    <total_tax>
                                        <![CDATA[ 12.5 ]]>
                                    </total_tax>
                                    <per_night>
                                        <![CDATA[ 0 ]]>
                                    </per_night>
                                    <price_mode>
                                        <![CDATA[ 1 ]]>
                                    </price_mode>
                                </service>
                            </services>
                        </room>
                    </rooms>
                </room_type>
            </room_types>
        </associations>
    </booking>
</qloapps>
```

### Get response in JSON

**Url**: http://example.com/api/bookings/1?ws_key=MNBDHALDK122DA879ADAD12ASKSK12W3&output_format=JSON

**Method**: POST

**Request body**: Get the request xml body content from [Request XML](https://devdocs.qloapps.com/webservice/advanced-api-uses.html#request-xml) of api.

#### Response JSON
Below is the full response in json format for the api request.

```json
{
	"booking": {
		"id": 1,
		"id_property": 1,
		"currency": "USD",
		"source": "qloapps.com",
		"booking_date": "2025-07-10 11:59:24",
		"id_language": 1,
		"associations": {
			"customer_detail": {
				"id_customer": 1,
				"firstname": "John",
				"lastname": "Doe",
				"email": "pub@qloapps.com",
				"phone": "1234567890"
			},
			"price_details": {
				"total_paid": 1125,
				"total_price_without_tax": 1000,
				"total_tax": 125
			},
			"cart_rules": [],
			"remarks": [
				"Manual order -- Employee: D. Demo"
			],
			"room_types": [
				{
					"id_room_type": 1,
					"checkin_date": "2025-07-08 00:00:00",
					"checkout_date": "2025-07-09 00:00:00",
					"total_tax": 112.5,
					"number_of_rooms": 1,
					"name": "General Rooms",
					"rooms": [
						{
							"id_room": 1,
							"id_hotel_booking": 1,
							"adults": 1,
							"child": 0,
							"unit_price_without_tax": 900,
							"total_tax": 112.5,
							"services": [
								{
									"id_service": 11,
									"name": "Transport",
									"quantity": 1,
									"unit_price_without_tax": 100,
									"total_price_without_tax": 100,
									"total_tax": 12.5,
									"per_night": 0,
									"price_mode": 1
								}
							]
						}
					]
				}
			]
		}
	}
}
```
