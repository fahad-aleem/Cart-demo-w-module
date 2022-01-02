var faker = require('faker');
const jsf = require("json-schema-faker");
//import jsf from 'json-schema-faker';

jsf.extend('faker', () => faker);
const schema = {
    "id": "Suppliers",
    "type": "array",
    "items": {
        "$ref": "Supplier"
    },
    "minItems": 10
};
const refs = [
    {
        "id": "Supplier",
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "faker": "company.companyName"
            },
            "profile": {
                "type": "string",
                "faker": "lorem.paragraphs"
            },
            "companySize": {
                "type": "integer",
                "minimum": 10,
                "maximum": 10000
            },
            "yearFounded": {
                "type": "integer",
                "minimum": 1995,
                "maximum": 2021
            },
            "services": {
                "type": "array",
                "items": {
                    "$ref": "Service"
                }
            },
            "contact": {
                "$ref": "Contact"
            }
        },
        "required": [
            "name",
            "profile",
            "companySize",
            "yearFounded",
            "services",
            "contact"
        ]
    },
    {
        "id": "Contact",
        "type": "object",
        "properties": {
            "website": {
                "type": "string",
                "faker": "internet.url"
            },
            "email": {
                "type": "string",
                "faker": "internet.email"
            },
            "phone": {
                "type": "string",
                "faker": "phone.phoneNumber"
            },
            "address": {
                "type": "string",
                "faker": "address.streetAddress"
            },
            "city": {
                "type": "string",
                "faker": "address.city"
            },
            "state": {
                "type": "string",
                "faker": "address.state"
            },
            "postcode": {
                "type": "string",
                "faker": "address.zipCodeByState"
            },
            "country": {
                "type": "string",
                "faker": "address.country"
            },
            "headOfficeLatitude": {
                "type": "string",
                "faker": "address.latitude"
            },
            "headOfficeLongitude": {
                "type": "string",
                "faker": "address.longitude"
            }
        },
        "required": [
            "website",
            "email",
            "phone",
            "address",
            "city",
            "state",
            "postcode",
            "country",
            "headOfficeLatitude",
            "headOfficeLongitude"
        ]
    },
    {
        "id": "Service",
        "type": "string",
        "enum": [
            "Formulation Development",
            "Stability Testing",
            "Product Information File",
            "Product Notifications",
            "Cosmetic Safety Assessment",
            "Quality Control",
            "Consultations"
        ]
    }
];

jsf.resolve(schema, refs).then(sample => {
    console.log("module.exports ="+ JSON.stringify(sample) + ";");
});
