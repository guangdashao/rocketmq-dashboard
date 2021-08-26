/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "L\u0101pule",
      "Po\u02bbakahi",
      "Po\u02bbalua",
      "Po\u02bbakolu",
      "Po\u02bbah\u0101",
      "Po\u02bbalima",
      "Po\u02bbaono"
    ],
    "ERANAMES": [
      "BCE",
      "CE"
    ],
    "ERAS": [
      "BCE",
      "CE"
    ],
    "FIRSTDAYOFWEEK": 6,
    "MONTH": [
      "Ianuali",
      "Pepeluali",
      "Malaki",
      "\u02bbApelila",
      "Mei",
      "Iune",
      "Iulai",
      "\u02bbAukake",
      "Kepakemapa",
      "\u02bbOkakopa",
      "Nowemapa",
      "Kekemapa"
    ],
    "SHORTDAY": [
      "LP",
      "P1",
      "P2",
      "P3",
      "P4",
      "P5",
      "P6"
    ],
    "SHORTMONTH": [
      "Ian.",
      "Pep.",
      "Mal.",
      "\u02bbAp.",
      "Mei",
      "Iun.",
      "Iul.",
      "\u02bbAu.",
      "Kep.",
      "\u02bbOk.",
      "Now.",
      "Kek."
    ],
    "STANDALONEMONTH": [
      "Ianuali",
      "Pepeluali",
      "Malaki",
      "\u02bbApelila",
      "Mei",
      "Iune",
      "Iulai",
      "\u02bbAukake",
      "Kepakemapa",
      "\u02bbOkakopa",
      "Nowemapa",
      "Kekemapa"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "EEEE, d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y h:mm:ss a",
    "mediumDate": "d MMM y",
    "mediumTime": "h:mm:ss a",
    "short": "d/M/yy h:mm a",
    "shortDate": "d/M/yy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "$",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-\u00a4",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "haw-us",
  "localeID": "haw_US",
  "pluralCat": function(n, opt_precision) {  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
