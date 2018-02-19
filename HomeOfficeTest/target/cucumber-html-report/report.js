$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/vehiclesearch.feature");
formatter.feature({
  "line": 1,
  "name": "Search Vehicle details",
  "description": "",
  "id": "search-vehicle-details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search and Verify vehicle details",
  "description": "",
  "id": "search-vehicle-details;search-and-verify-vehicle-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I read the vehicle details from \"vehicle.csv\" file",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to DVLA page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I select start on DVLA page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter vehicle Registration \"\u003cNumber\u003e\" number",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select continue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the \"\u003cBrand\u003e\" \"\u003cColour\u003e\" of the vehicle",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "search-vehicle-details;search-and-verify-vehicle-details;",
  "rows": [
    {
      "cells": [
        "Number",
        "Brand",
        "Colour"
      ],
      "line": 11,
      "id": "search-vehicle-details;search-and-verify-vehicle-details;;1"
    },
    {
      "cells": [
        "EF59 OJN",
        "Nissan",
        "Black"
      ],
      "line": 12,
      "id": "search-vehicle-details;search-and-verify-vehicle-details;;2"
    },
    {
      "cells": [
        "FE61 BVX",
        "VAUXHALL",
        "White"
      ],
      "line": 13,
      "id": "search-vehicle-details;search-and-verify-vehicle-details;;3"
    },
    {
      "cells": [
        "EX15 ZUC",
        "AUDI",
        "White"
      ],
      "line": 14,
      "id": "search-vehicle-details;search-and-verify-vehicle-details;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5704654061,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search and Verify vehicle details",
  "description": "",
  "id": "search-vehicle-details;search-and-verify-vehicle-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I read the vehicle details from \"vehicle.csv\" file",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to DVLA page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I select start on DVLA page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter vehicle Registration \"EF59 OJN\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select continue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the \"Nissan\" \"Black\" of the vehicle",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vehicle.csv",
      "offset": 33
    }
  ],
  "location": "vechicleinfoSteps.read_registration_number_from_file(String)"
});
formatter.result({
  "duration": 231776607,
  "status": "passed"
});
formatter.match({
  "location": "vechicleinfoSteps.i_am_on_DVLA_search_page()"
});
formatter.result({
  "duration": 1055315710,
  "status": "passed"
});
formatter.match({
  "location": "vechicleinfoSteps.i_click_on_button()"
});
formatter.result({
  "duration": 1513544286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EF59 OJN",
      "offset": 30
    }
  ],
  "location": "vechicleinfoSteps.i_enter_registration_number(String)"
});
formatter.result({
  "duration": 104085646,
  "status": "passed"
});
formatter.match({
  "location": "vechicleinfoSteps.i_click_on_continue_button()"
});
formatter.result({
  "duration": 359452555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 18
    },
    {
      "val": "Black",
      "offset": 27
    }
  ],
  "location": "vechicleinfoSteps.verify_vehicleBrandAndColor(String,String)"
});
formatter.result({
  "duration": 80500875,
  "status": "passed"
});
formatter.after({
  "duration": 658083431,
  "status": "passed"
});
formatter.before({
  "duration": 4283390986,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search and Verify vehicle details",
  "description": "",
  "id": "search-vehicle-details;search-and-verify-vehicle-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I read the vehicle details from \"vehicle.csv\" file",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to DVLA page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I select start on DVLA page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter vehicle Registration \"FE61 BVX\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select continue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the \"VAUXHALL\" \"White\" of the vehicle",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vehicle.csv",
      "offset": 33
    }
  ],
  "location": "vechicleinfoSteps.read_registration_number_from_file(String)"
});
formatter.result({
  "duration": 18433566,
  "status": "passed"
});
formatter.match({
  "location": "vechicleinfoSteps.i_am_on_DVLA_search_page()"
});
formatter.result({
  "duration": 1030518890,
  "status": "passed"
});
formatter.match({
  "location": "vechicleinfoSteps.i_click_on_button()"
});
formatter.result({
  "duration": 708205267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FE61 BVX",
      "offset": 30
    }
  ],
  "location": "vechicleinfoSteps.i_enter_registration_number(String)"
});
formatter.result({
  "duration": 90791830,
  "status": "passed"
});
formatter.match({
  "location": "vechicleinfoSteps.i_click_on_continue_button()"
});
formatter.result({
  "duration": 387108830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VAUXHALL",
      "offset": 18
    },
    {
      "val": "White",
      "offset": 29
    }
  ],
  "location": "vechicleinfoSteps.verify_vehicleBrandAndColor(String,String)"
});
formatter.result({
  "duration": 75668878,
  "status": "passed"
});
formatter.after({
  "duration": 652576669,
  "status": "passed"
});
formatter.before({
  "duration": 4205618801,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search and Verify vehicle details",
  "description": "",
  "id": "search-vehicle-details;search-and-verify-vehicle-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I read the vehicle details from \"vehicle.csv\" file",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to DVLA page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I select start on DVLA page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter vehicle Registration \"EX15 ZUC\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select continue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the \"AUDI\" \"White\" of the vehicle",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vehicle.csv",
      "offset": 33
    }
  ],
  "location": "vechicleinfoSteps.read_registration_number_from_file(String)"
});
formatter.result({
  "duration": 12356335,
  "status": "passed"
});
formatter.match({
  "location": "vechicleinfoSteps.i_am_on_DVLA_search_page()"
});
formatter.result({
  "duration": 988404948,
  "status": "passed"
});
formatter.match({
  "location": "vechicleinfoSteps.i_click_on_button()"
});
formatter.result({
  "duration": 639202655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EX15 ZUC",
      "offset": 30
    }
  ],
  "location": "vechicleinfoSteps.i_enter_registration_number(String)"
});
formatter.result({
  "duration": 94121802,
  "status": "passed"
});
formatter.match({
  "location": "vechicleinfoSteps.i_click_on_continue_button()"
});
formatter.result({
  "duration": 367081981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUDI",
      "offset": 18
    },
    {
      "val": "White",
      "offset": 25
    }
  ],
  "location": "vechicleinfoSteps.verify_vehicleBrandAndColor(String,String)"
});
formatter.result({
  "duration": 80071048,
  "status": "passed"
});
formatter.after({
  "duration": 658439776,
  "status": "passed"
});
});