# The ObjectModel class
When you want to go deep in QloApps development, you need to utilize the ObjectModel class. This is the fundamental object of QloApps's object relational model. It very well may be overridden but with great precaution. 

It is an Active Record sort of class (see: http://en.wikipedia.org/wiki/Active_record_pattern). The table property or views related to QloApps' database are written in this class. Subsequently, the class is attached to a database record. After a object has been started up, another record is added to the database. Each object recovers its information from the database. when an object is updated, the record to which it is tied is updated also. The class executes accessors for each property.

## Defining the model

You must use the `$definition` static variable in order to define the model.

For instance:

```php
/**
* Example from the CMS model (CMSCore)
*/
public static $definition = array(
  'table' => 'cms',
  'primary' => 'id_cms',
  'multilang' => true,
  'fields' => array(
    'id_cms_category'  => array('type' => self::TYPE_INT, 'validate' => 'isUnsignedInt'),
    'position'         => array('type' => self::TYPE_INT),
    'active'           => array('type' => self::TYPE_BOOL),
 
    // Language fields
    'meta_description' =>
        array('type' => self::TYPE_STRING, 'lang' => true, 'validate' => 'isGenericName', 'size' => 255),
    'meta_keywords'    =>
        array('type' => self::TYPE_STRING, 'lang' => true, 'validate' => 'isGenericName', 'size' => 255),
    'meta_title'       =>
        array('type' => self::TYPE_STRING, 'lang' => true, 'validate' => 'isGenericName', 'required' => true, 'size' => 128),
    'link_rewrite'     =>
        array('type' => self::TYPE_STRING, 'lang' => true, 'validate' => 'isLinkRewrite', 'required' => true, 'size' => 128),
    'content'          =>
        array('type' => self::TYPE_HTML,   'lang' => true, 'validate' => 'isString', 'size' => 3999999999999),
  ),
);
```
## A model for multiple stores and/or languages

To retrieve an object in many languages:
'multilang' => true

To retrieve an object depending on the current store
'multishop' => true

To retrieve an object which depends on the current store, and in many languages:
'multilang_shop' => true

## The main methods
Any overriding of the ObjectModel methods is bound to influence how all the other classes and methods act. Use with care.
When you override a ObjectModel method it has its effect on the  all the other classes and methods acts. So handle it very carefully. 

| Name of the methods and parameters | Description |
| ----------- | ----------- |
|__construct($id = NULL, $id_lang = NULL) | Create object.|
|add($autodate = true, $nullValues = false) | Save the current object to database (add or update).|
|associateTo(integer|array $id_shops) | Associate an item to its context.|
|delete() | Delete current object from database.|
|deleteImage(mixed $force_delete = false)	| Delete images associated with the object.|
|deleteSelection($selection) | Delete several objects from database.|
|getFields() | Prepare fields for ObjectModel class (add, update).|
|getValidationRules($className = _CLASS_) | Return object validation rules (field validity).|
|save($nullValues = false, $autodate = true) | Save current object to database (add or update).|
|toggleStatus() | Toggle object's status in database.|
|update($nullValues = false) | Update current object to database.|
|validateFields($die = true, $errorReturn = false) | Check for field validity before database interaction.|