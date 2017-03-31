$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/AccountManagement.feature");
formatter.feature({
  "line": 3,
  "name": "Manage account on Mecury Tours web site",
  "description": "",
  "id": "manage-account-on-mecury-tours-web-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@register"
    },
    {
      "line": 2,
      "name": "@ui"
    }
  ]
});
formatter.before({
  "duration": 39752421,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Repeat register a new using using API testing",
  "description": "",
  "id": "manage-account-on-mecury-tours-web-site;repeat-register-a-new-using-using-api-testing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@api"
    },
    {
      "line": 21,
      "name": "@registerapi"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I create a request for URL \"http://newtours.demoaut.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I send the registration request with this user input:",
  "rows": [
    {
      "cells": [
        "address1",
        "The White House"
      ],
      "line": 25
    },
    {
      "cells": [
        "address2",
        "1600 Pennsylvania Ave NW"
      ],
      "line": 26
    },
    {
      "cells": [
        "city",
        "Washington"
      ],
      "line": 27
    },
    {
      "cells": [
        "confirmPassword",
        "Go#piggies1"
      ],
      "line": 28
    },
    {
      "cells": [
        "country",
        "215"
      ],
      "line": 29
    },
    {
      "cells": [
        "email",
        "piglette3"
      ],
      "line": 30
    },
    {
      "cells": [
        "firstName",
        "Guinea"
      ],
      "line": 31
    },
    {
      "cells": [
        "lastName",
        "Piglette"
      ],
      "line": 32
    },
    {
      "cells": [
        "mercury",
        "process"
      ],
      "line": 33
    },
    {
      "cells": [
        "password",
        "Go#piggies1"
      ],
      "line": 34
    },
    {
      "cells": [
        "phone",
        "555-555-5555"
      ],
      "line": 35
    },
    {
      "cells": [
        "postalCode",
        "20500"
      ],
      "line": 36
    },
    {
      "cells": [
        "register.x",
        "21"
      ],
      "line": 37
    },
    {
      "cells": [
        "register.y",
        "12"
      ],
      "line": 38
    },
    {
      "cells": [
        "state",
        "ND"
      ],
      "line": 39
    },
    {
      "cells": [
        "userName",
        "freddie@domain.com"
      ],
      "line": 40
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the registration status is \"200\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com",
      "offset": 28
    }
  ],
  "location": "MercuryToursApiSteps.i_create_a_request_for_URL(String)"
});
formatter.result({
  "duration": 876676444,
  "status": "passed"
});
formatter.match({
  "location": "MercuryToursApiSteps.i_send_the_request_with_this_user_input(String,String\u003e)"
});
formatter.result({
  "duration": 2299381741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "MercuryToursApiSteps.the_registration_status_is(int)"
});
formatter.result({
  "duration": 3880786,
  "status": "passed"
});
formatter.after({
  "duration": 152898,
  "status": "passed"
});
formatter.uri("features/ConvertDataTable.feature");
formatter.feature({
  "line": 3,
  "name": "Convert a data table to an object",
  "description": "",
  "id": "convert-a-data-table-to-an-object",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@datatab"
    },
    {
      "line": 2,
      "name": "@api"
    }
  ]
});
formatter.before({
  "duration": 373187,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Convert a one column list of integers into a List object of ints",
  "description": "",
  "id": "convert-a-data-table-to-an-object;convert-a-one-column-list-of-integers-into-a-list-object-of-ints",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "a list of numbers:",
  "rows": [
    {
      "cells": [
        "100"
      ],
      "line": 7
    },
    {
      "cells": [
        "99"
      ],
      "line": 8
    },
    {
      "cells": [
        "98"
      ],
      "line": 9
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I sum them",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should get \"297\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatable_steps.a_list_of_numbers(Integer\u003e)"
});
formatter.result({
  "duration": 273912,
  "status": "passed"
});
formatter.match({
  "location": "Datatable_steps.i_sum_them()"
});
formatter.result({
  "duration": 57247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "297",
      "offset": 14
    }
  ],
  "location": "Datatable_steps.i_should_get(int)"
});
formatter.result({
  "duration": 120652,
  "status": "passed"
});
formatter.after({
  "duration": 376086,
  "status": "passed"
});
formatter.before({
  "duration": 340941,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Convert a two column table to a map",
  "description": "",
  "id": "convert-a-data-table-to-an-object;convert-a-two-column-table-to-a-map",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "a price per item list:",
  "rows": [
    {
      "cells": [
        "coke",
        "1"
      ],
      "line": 16
    },
    {
      "cells": [
        "cookie",
        "2"
      ],
      "line": 17
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I order \"1\" \"coke\" and \"1\" \"cookie\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "my total owed is \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatable_steps.a_price_per_item_list(String,Integer\u003e)"
});
formatter.result({
  "duration": 168115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "coke",
      "offset": 13
    },
    {
      "val": "1",
      "offset": 24
    },
    {
      "val": "cookie",
      "offset": 28
    }
  ],
  "location": "Datatable_steps.i_order_and_i_order(int,String,int,String)"
});
formatter.result({
  "duration": 126449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "Datatable_steps.my_total_owed_is(int)"
});
formatter.result({
  "duration": 89855,
  "status": "passed"
});
formatter.after({
  "duration": 923911,
  "status": "passed"
});
formatter.before({
  "duration": 159058,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "An international coffee shop must handle currencies",
  "description": "",
  "id": "convert-a-data-table-to-an-object;an-international-coffee-shop-must-handle-currencies",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@datatab3"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the price list for an international coffee shop",
  "rows": [
    {
      "cells": [
        "product",
        "currency",
        "price",
        "happy"
      ],
      "line": 25
    },
    {
      "cells": [
        "coffee",
        "EUR",
        "1",
        "true"
      ],
      "line": 26
    },
    {
      "cells": [
        "donut",
        "SEK",
        "18",
        "false"
      ],
      "line": 27
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I buy \"1\" \"coffee\" and \"1\" \"donut\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should pay \"1\" EUR be \"happy\" and \"18\" SEK be \"unhappy\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Datatable_steps.the_price_list_for_an_international_coffee_shop(Price\u003e)"
});
formatter.result({
  "duration": 17687630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    },
    {
      "val": "coffee",
      "offset": 11
    },
    {
      "val": "1",
      "offset": 24
    },
    {
      "val": "donut",
      "offset": 28
    }
  ],
  "location": "Datatable_steps.i_order_coffee_and_donut(int,String,int,String)"
});
formatter.result({
  "duration": 182246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    },
    {
      "val": "happy",
      "offset": 25
    },
    {
      "val": "18",
      "offset": 37
    },
    {
      "val": "unhappy",
      "offset": 49
    }
  ],
  "location": "Datatable_steps.should_I_pay_EUR_and_SEK(int,String,int,String)"
});
formatter.result({
  "duration": 349275,
  "status": "passed"
});
formatter.after({
  "duration": 172463,
  "status": "passed"
});
formatter.uri("features/DemoRest-Assured.feature");
formatter.feature({
  "line": 3,
  "name": "Demonstrate rest-assured",
  "description": "",
  "id": "demonstrate-rest-assured",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@rest"
    },
    {
      "line": 2,
      "name": "@api"
    }
  ]
});
formatter.before({
  "duration": 281159,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Validate a JSON array",
  "description": "",
  "id": "demonstrate-rest-assured;validate-a-json-array",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I set the JSON validation string to:",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 7,
    "value": "{\"employees\":[\n    {\"firstName\":\"John\", \"lastName\":\"Doe\"},\n    {\"firstName\":\"Anna\", \"lastName\":\"Smith\"},\n    {\"firstName\":\"Peter\",\"lastName\":\"Jones\"} \n]}"
  }
});
formatter.step({
  "line": 14,
  "name": "I validate the string by invoking end point:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 15,
    "value": "http://validate.jsontest.com/"
  }
});
formatter.step({
  "line": 18,
  "name": "the HTTP status code is \"200\", object is \"object\", empty is \"false\" and validate is \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RestDemoSteps.i_set_the_JSON_validation_string_to(String)"
});
formatter.result({
  "duration": 12519892,
  "status": "passed"
});
formatter.match({
  "location": "RestDemoSteps.i_validate_the_string_by_invoking_end_point(String)"
});
formatter.result({
  "duration": 509463379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    },
    {
      "val": "object",
      "offset": 42
    },
    {
      "val": "false",
      "offset": 61
    },
    {
      "val": "true",
      "offset": 85
    }
  ],
  "location": "RestDemoSteps.the_HTTP_status_code_is_object_is_empty_is_and_validate_is(int,String,String,String)"
});
formatter.result({
  "duration": 1212912064,
  "status": "passed"
});
formatter.after({
  "duration": 94565,
  "status": "passed"
});
formatter.before({
  "duration": 406883,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Get local weather",
  "description": "",
  "id": "demonstrate-rest-assured;get-local-weather",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@weather"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I create a demo request for URL \"https://weather.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I send that request",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the response status is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the Content-Type is \"text/html; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the Content-Encoding is \"gzip\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://weather.com",
      "offset": 33
    }
  ],
  "location": "RestDemoSteps.i_create_a_request_for_URL(String)"
});
formatter.result({
  "duration": 546013,
  "status": "passed"
});
formatter.match({
  "location": "RestDemoSteps.i_send_that_request()"
});
formatter.result({
  "duration": 1737464892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 24
    }
  ],
  "location": "RestDemoSteps.the_response_status_is(int)"
});
formatter.result({
  "duration": 130072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text/html; charset\u003dutf-8",
      "offset": 21
    }
  ],
  "location": "RestDemoSteps.the_content_type_is(String)"
});
formatter.result({
  "duration": 209419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gzip",
      "offset": 25
    }
  ],
  "location": "RestDemoSteps.content_encoding_is(String)"
});
formatter.result({
  "duration": 123188,
  "status": "passed"
});
formatter.after({
  "duration": 146014,
  "status": "passed"
});
formatter.uri("features/OData.feature");
formatter.feature({
  "line": 3,
  "name": "Demonstrate ability to test OData Service Documents",
  "description": "The Open Data Protocol (OData) enables the creation of HTTP-based data \nservices, which allow resources identified using Uniform Resource \nIdentifiers (URIs) and defined in an abstract data model, to be published \nand edited by Web clients using simple HTTP messages.",
  "id": "demonstrate-ability-to-test-odata-service-documents",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@api"
    },
    {
      "line": 2,
      "name": "@odata"
    }
  ]
});
formatter.before({
  "duration": 130072,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Parse a canned OData Service document",
  "description": "",
  "id": "demonstrate-ability-to-test-odata-service-documents;parse-a-canned-odata-service-document",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I have a simple service document",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I search for available collections I find \"3\"",
  "keyword": "When "
});
formatter.match({
  "location": "ODataSteps.i_have_a_simple_service_document()"
});
formatter.result({
  "duration": 89493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 43
    }
  ],
  "location": "ODataSteps.i_search_for_available_collections_i_find(int)"
});
formatter.result({
  "duration": 428517961,
  "status": "passed"
});
formatter.after({
  "duration": 121376,
  "status": "passed"
});
formatter.uri("features/germanBankCodes.feature");
formatter.feature({
  "line": 2,
  "name": "Exercise SOAP requests using thomas-bayer endpoint",
  "description": "",
  "id": "exercise-soap-requests-using-thomas-bayer-endpoint",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@blz"
    }
  ]
});
formatter.before({
  "duration": 1440575,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Request a bank using its bank code",
  "description": "",
  "id": "exercise-soap-requests-using-thomas-bayer-endpoint;request-a-bank-using-its-bank-code",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@api"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I build a request to get bank codes from \"http://www.thomas-bayer.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the namespace is \"http://thomas-bayer.com/blz/\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I send the request to \"/axis2/services/BLZService\" to get bank code \"10030400\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Bezeichnung is \"ABK-Kreditbank\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "bic is \"ABKBDEB1XXX\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "ort is \"Berlin\" and plz is \"10789\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "name space \"ns1\" is \"http://thomas-bayer.com/blz/\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.thomas-bayer.com",
      "offset": 42
    }
  ],
  "location": "BankCodesSteps.i_build_a_request_to_get_bank_codes_from(String)"
});
formatter.result({
  "duration": 927172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://thomas-bayer.com/blz/",
      "offset": 18
    }
  ],
  "location": "BankCodesSteps.the_name_space_is(String)"
});
formatter.result({
  "duration": 106521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/axis2/services/BLZService",
      "offset": 23
    },
    {
      "val": "10030400",
      "offset": 69
    }
  ],
  "location": "BankCodesSteps.i_send_the_request_to_get_bank_code(String,String)"
});
formatter.result({
  "duration": 952912093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABK-Kreditbank",
      "offset": 16
    }
  ],
  "location": "BankCodesSteps.bezeichnung_is(String)"
});
formatter.result({
  "duration": 21319141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABKBDEB1XXX",
      "offset": 8
    }
  ],
  "location": "BankCodesSteps.bic_is(String)"
});
formatter.result({
  "duration": 21900299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Berlin",
      "offset": 8
    },
    {
      "val": "10789",
      "offset": 28
    }
  ],
  "location": "BankCodesSteps.ort_is_and_plz_is(String,int)"
});
formatter.result({
  "duration": 46258924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ns1",
      "offset": 12
    },
    {
      "val": "http://thomas-bayer.com/blz/",
      "offset": 21
    }
  ],
  "location": "BankCodesSteps.name_space_is(String,String)"
});
formatter.result({
  "duration": 98877612,
  "status": "passed"
});
formatter.after({
  "duration": 143478,
  "status": "passed"
});
});