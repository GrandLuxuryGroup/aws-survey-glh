const finalSurvey = {
    "pages": [
     {
      "name": "GENERAL INFORMATION",
      "elements": [
       {
        "type": "panel",
        "name": "Hotel Closure",
        "elements": [
         {
          "type": "boolean",
          "name": "IsHotelClosed",
          "title": "Is your hotel closed ?",
          "isRequired": true,
          "labelTrue": "Yes",
          "labelFalse": "No"
         },
         {
          "type": "text",
          "name": "HotelReopeningDate",
          "visibleIf": "{IsHotelClosed} = true",
          "width": "25",
          "title": "If yes, expected reopening date ?",
          "isRequired": true,
          "inputType": "date",
          "max": "2999-12-31"
         }
        ],
        "title": "Hotel Closure"
       },
       {
        "type": "panel",
        "name": "Local containment",
        "elements": [
         {
          "type": "boolean",
          "name": "isHotelContainmentZone",
          "title": "Is your hotel located in a containment zone ?",
          "isRequired": true,
          "labelTrue": "Yes",
          "labelFalse": "No"
         },
         {
          "type": "text",
          "name": "HotelContainmentEndDate",
          "visibleIf": "{isHotelContainmentZone} = true",
          "width": "25",
          "title": "If yes, official end of containment date ? (expected date)",
          "isRequired": true,
          "inputType": "date",
          "max": "2999-12-31"
         }
        ],
        "title": "Local containment"
       }
      ],
      "title": "GENERAL INFORMATION (Page 1/3)"
     },
     {
      "name": "LAST WEEK ACTIVITY",
      "elements": [
       {
        "type": "panel",
        "name": "LastWeekActivity",
        "elements": [
    
         {
          "type": "text",
          "name": "NbBookings",
          "width": "10",
          "title": "Total number of bookings",
          "isRequired": false,
          "visible": false,
          "validators": [
           {
            "type": "numeric",
            "text": "This number cannot be negative",
            "minValue": 0
           }
          ],
          "titleLocation": "left",
          "inputType": "number",
          "size": 10
         },
         {
          "type": "text",
          "name": "NbRoomNightsBooked",
          "width": "10",
          "title": "Total number of room nights booked over the past 7 days",
          "isRequired": true,
          "requiredErrorText": "This number cannot be negative",
          "validators": [
           {
            "type": "numeric",
            "text": "This number cannot be negative",
            "minValue": 0
           }
          ],
          "titleLocation": "left",
          "inputType": "number",
          "size": 10
         },
         {
            "type": "panel",
            "name": "panelWarningNbRoomNight",
            "elements": [
             {
              "type": "html",
              "name": "WarningNbRoomNights",
              "visibleIf": "{NbRoomNightsBooked} = 0",
              "html": "Are you sure that had NO room nights booked over the past 7 days ?"
             }
            ]
           },
         {
          "type": "text",
          "name": "NbRoomNightsCanceled",
          "width": "10",
          "title": "Total number of room nights cancelled over the past 7 days",
          "isRequired": true,
          "requiredErrorText": "This number cannot be negative",
          "validators": [
           {
            "type": "numeric",
            "text": "This number cannot be negative",
            "minValue": 0
           }
          ],
          "titleLocation": "left",
          "inputType": "number",
          "size": 10
         }
        ],
        "title": "Last Week Activity - General Information"
       },
       {
        "type": "panel",
        "name": "panel1",
        "elements": [
         {
          "type": "matrixdropdown",
          "name": "RoomsNightsSplit",
          "width": "300",
          "title": "Geo Mix - Split of total room nights booked by client country of origin (countries 1 to 5 in number of nights descending order)",
          "validators": [
           {
            "type": "expression",
            "text": "\"Other Countries\" cannot be negative ",
            "expression": "({NbRoomNightsBooked}-{RoomsNightsSplit.Country1.NbRoomNights}-{RoomsNightsSplit.Country2.NbRoomNights}-{RoomsNightsSplit.Country3.NbRoomNights}-{RoomsNightsSplit.Country4.NbRoomNights}-{RoomsNightsSplit.Country5.NbRoomNights})>=0"
           },
           {
            "type": "expression",
            "text": "Room nights must be allocated to their country of origin. Please select your top 5 countries for last week, and fill the activity for each country.",
            "expression": "((({NbRoomNightsBooked}-{RoomsNightsSplit.Country1.NbRoomNights}-{RoomsNightsSplit.Country2.NbRoomNights}-{RoomsNightsSplit.Country3.NbRoomNights}-{RoomsNightsSplit.Country4.NbRoomNights}-{RoomsNightsSplit.Country5.NbRoomNights})>0) AND {RoomsNightsSplit.Country5.NbRoomNights}>0 AND {RoomsNightsSplit.Country4.NbRoomNights}>0 AND {RoomsNightsSplit.Country3.NbRoomNights}>0 AND {RoomsNightsSplit.Country2.NbRoomNights}>0 AND  {RoomsNightsSplit.Country1.NbRoomNights}>0) OR (({NbRoomNightsBooked}-{RoomsNightsSplit.Country1.NbRoomNights}-{RoomsNightsSplit.Country2.NbRoomNights}-{RoomsNightsSplit.Country3.NbRoomNights}-{RoomsNightsSplit.Country4.NbRoomNights}-{RoomsNightsSplit.Country5.NbRoomNights})=0) "
           }
          ],
          "columns": [
           {
            "name": "Country",
            "title": "Country",
            "cellType": "dropdown",
            "width": "20",
            "requiredIf": "{row.NbRoomNights} notempty",
            "choicesOrder": "asc",
            "choices":[
                'Ascension Island',
                'Andorra',
                'United Arab Emirates',
                'Afghanistan',
                'Antigua and Barbuda',
                'Anguilla',
                'Albania',
                'Armenia',
                'Netherlands Antilles',
                'Angola',
                'Antarctica',
                'Argentina',
                'American Samoa',
                'Austria',
                'Australia',
                'Aruba',
                'Aland Islands',
                'Azerbaijan',
                'Bosnia and Herzegovina',
                'Barbados',
                'Bangladesh',
                'Belgium',
                'Burkina Faso',
                'Bulgaria',
                'Bahrain',
                'Burundi',
                'Benin',
                'Saint Barthelemy',
                'Bermuda',
                'Brunei',
                'Bolivia',
                'Caribbean Netherlands',
                'Brazil',
                'Bahamas',
                'Bhutan',
                'Bouvet Island',
                'Botswana',
                'Belarus',
                'Belize',
                'Canada',
                'Cocos - Keeling Islands',
                'Congo - Kinshasa',
                'Central African Republic',
                'Congo - Brazzaville',
                'Switzerland',
                'Ivory Coast',
                'Cook Islands',
                'Chile',
                'Cameroon',
                'China',
                'Colombia',
                'Clipperton Island',
                'Costa Rica',
                'Cuba',
                'Cape Verde',
                'Curaçao',
                'Christmas Island',
                'Cyprus',
                'Czech Republic',
                'Germany',
                'Diego Garcia',
                'Djibouti',
                'Denmark',
                'Dominica',
                'Dominican Republic',
                'Algeria',
                'Ceuta and Melilla',
                'Ecuador',
                'Estonia',
                'Egypt',
                'Western Sahara',
                'Eritrea',
                'Spain',
                'Ethiopia',
                'Finland',
                'Fiji',
                'Falkland Islands',
                'Micronesia',
                'Faroe Islands',
                'France',
                'Gabon',
                'United Kingdom',
                'Grenada',
                'Georgia',
                'French Guiana',
                'Guernsey',
                'Ghana',
                'Gibraltar',
                'Greenland',
                'Gambia',
                'Guinea',
                'Guadeloupe',
                'Equatorial Guinea',
                'Greece',
                'South Georgia and the South Sandwich Islands',
                'Guatemala',
                'Guam',
                'Guinea-Bissau',
                'Guyana',
                'Hong Kong',
                'Heard Island and McDonald Islands',
                'Honduras',
                'Croatia',
                'Haiti',
                'Hungary',
                'Canary Islands',
                'Indonesia',
                'Ireland',
                'Israel',
                'Isle of Man',
                'India',
                'British Indian Ocean Territory',
                'Iraq',
                'Iran',
                'Iceland',
                'Italy',
                'Jersey',
                'Jamaica',
                'Jordan',
                'Japan',
                'Kenya',
                'Kyrgyzstan',
                'Cambodia',
                'Kiribati',
                'Comoros',
                'Saint Kitts and Nevis',
                'North Korea',
                'South Korea',
                'Kuwait',
                'Cayman Islands',
                'Kazakhstan',
                'Laos',
                'Lebanon',
                'Saint Lucia',
                'Liechtenstein',
                'Sri Lanka',
                'Liberia',
                'Lesotho',
                'Lithuania',
                'Luxembourg',
                'Latvia',
                'Libya',
                'Morocco',
                'Monaco',
                'Moldova',
                'Montenegro',
                'Saint Martin',
                'Madagascar',
                'Marshall Islands',
                'Macedonia',
                'Mali',
                'Myanmar - Burma',
                'Mongolia',
                'Macau',
                'Northern Mariana Islands',
                'Martinique',
                'Mauritania',
                'Montserrat',
                'Malta',
                'Mauritius',
                'Maldives',
                'Malawi',
                'Mexico',
                'Malaysia',
                'Mozambique',
                'Namibia',
                'New Caledonia',
                'Niger',
                'Norfolk Island',
                'Nigeria',
                'Nicaragua',
                'Netherlands',
                'Norway',
                'Nepal',
                'Nauru',
                'Niue',
                'New Zealand',
                'Oman',
                'Panama',
                'Peru',
                'French Polynesia',
                'Papua New Guinea',
                'Philippines',
                'Pakistan',
                'Poland',
                'Saint Pierre and Miquelon',
                'Pitcairn Islands',
                'Puerto Rico',
                'Palestinian Territories',
                'Portugal',
                'Palau',
                'Paraguay',
                'Qatar',
                'Reunion',
                'Romania',
                'Serbia',
                'Russia',
                'Rwanda',
                'Saudi Arabia',
                'Solomon Islands',
                'Seychelles',
                'Sudan',
                'Sweden',
                'Singapore',
                'Saint Helena',
                'Slovenia',
                'Svalbard and Jan Mayen',
                'Slovakia',
                'Sierra Leone',
                'San Marino',
                'Senegal',
                'Somalia',
                'Suriname',
                'South Sudan',
                'S√£o Tom√© and Pr√≠ncipe',
                'El Salvador',
                'Sint Maarten',
                'Syria',
                'Swaziland',
                'Tristan da Cunha',
                'Turks and Caicos Islands',
                'Chad',
                'French Southern Territories',
                'Togo',
                'Thailand',
                'Tajikistan',
                'Tokelau',
                'Timor-Leste',
                'Turkmenistan',
                'Tunisia',
                'Tonga',
                'Turkey',
                'Trinidad and Tobago',
                'Tuvalu',
                'Taiwan',
                'Tanzania',
                'Ukraine',
                'Uganda',
                'U.S. Minor Outlying Islands',
                'United States',
                'Uruguay',
                'Uzbekistan',
                'Vatican City',
                'St Vincent and Grenadines',
                'Venezuela',
                'British Virgin Islands',
                'U.S. Virgin Islands',
                'Vietnam',
                'Vanuatu',
                'Wallis and Futuna',
                'Samoa',
                'Kosovo',
                'Yemen',
                'Mayotte',
                'South Africa',
                'Zambia',
                'Zimbabwe'
            ]
           },
           {
            "name": "NbRoomNights",
            "title": "NB of room nights",
            "cellType": "text",
            "width": "10",
            "requiredIf": "{row.Country} notempty",
            "validators": [
             {
              "type": "numeric",
              "text": "This number cannot be negative",
              "minValue": 0
             }
            ],
            "totalExpression": "{NbRoomNightsBooked}-{RoomsNightsSplit.Country1.NbRoomNights}-{RoomsNightsSplit.Country2.NbRoomNights}-{RoomsNightsSplit.Country3.NbRoomNights}-{RoomsNightsSplit.Country4.NbRoomNights}-{RoomsNightsSplit.Country5.NbRoomNights}",
            "totalDisplayStyle": "decimal",
            "inputType": "number"
           }
          ],
          "rows": [
           {
            "value": "Country1",
            "text": "Country of Origin #1 (largest)"
           },
           {
            "value": "Country2",
            "text": "Country of Origin #2 "
           },
           {
            "value": "Country3",
            "text": "Country of Origin #3"
           },
           {
            "value": "Country4",
            "text": "Country of Origin #4"
           },
           {
            "value": "Country5",
            "text": "Country of Origin #5"
           }
          ],
          "totalText": "Other Countries"
         }
        ]
       },
       {
        "type": "matrixdropdown",
        "name": "SplitTotalRoomsBusinessSegment",
        "width": "300",
        "title": "Split of total room nights booked by business segment",
        "validators": [
         {
          "type": "expression",
          "text": "\"Remaining rooms nights booked by segment\" should be equals to 0.",
          "expression": "({NbRoomNightsBooked}-{SplitTotalRoomsBusinessSegment.FIT.NbRoomsNightsBS}-{SplitTotalRoomsBusinessSegment.Corporate.NbRoomsNightsBS}-{SplitTotalRoomsBusinessSegment.MICE.NbRoomsNightsBS})=0"
         }
        ],
        "columns": [
         {
          "name": "NbRoomsNightsBS",
          "title": "Nb of rooms nights",
          "cellType": "text",
          "width": "10",
          "validators": [
           {
            "type": "numeric",
            "text": "This number cannot be negative",
            "minValue": 0
           }
          ],
          "totalExpression": "{NbRoomNightsBooked}-{SplitTotalRoomsBusinessSegment.FIT.NbRoomsNightsBS}-{SplitTotalRoomsBusinessSegment.Corporate.NbRoomsNightsBS}-{SplitTotalRoomsBusinessSegment.MICE.NbRoomsNightsBS}",
          "inputType": "number"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rows": [
         {
          "value": "FIT",
          "text": "FIT"
         },
         {
          "value": "MICE",
          "text": "MICE"
         },
         {
          "value": "Corporate",
          "text": "Corporate"
         }
        ],
        "totalText": "Remaining room nights to be allocated to a business segment"
       },
       {
        "type": "panel",
        "name": "panel3",
        "elements": [
         {
          "type": "matrixdropdown",
          "name": "SplitByMonth",
          "title": "Booking pace by arrival month",
          "validators": [
           {
            "type": "expression",
            "text": "\"Stay from October 2020 or later\" cannot be negative",
            "expression": "{SplitByMonth.NbRoomsByMonth.M7} >= 0"
           }
          ],
          "columns": [
           {
            "name": "M1",
            "title": "Stay in April 2020",
            "cellType": "text",
            "width": "10",
            "validators": [
             {
              "type": "numeric",
              "text": "This number cannot be negative",
              "minValue": 0
             }
            ],
            "inputType": "number"
           },
           {
            "name": "M2",
            "title": "Stay in May 2020",
            "cellType": "text",
            "width": "10",
            "validators": [
             {
              "type": "numeric",
              "text": "This number cannot be negative",
              "minValue": -19
             }
            ],
            "inputType": "number"
           },
           {
            "name": "M3",
            "title": "Stay in June 2020",
            "cellType": "text",
            "width": "10",
            "validators": [
             {
              "type": "numeric",
              "text": "This number cannot be negative",
              "minValue": 0
             }
            ],
            "inputType": "number"
           },
           {
            "name": "M4",
            "title": "Stay in July 2020",
            "cellType": "text",
            "width": "10",
            "validators": [
             {
              "type": "numeric",
              "text": "This number cannot be negative",
              "minValue": 0
             }
            ],
            "inputType": "number"
           },
           {
            "name": "M5",
            "title": "Stay in August 2020",
            "cellType": "text",
            "width": "10",
            "validators": [
             {
              "type": "numeric",
              "text": "This number cannot be negative",
              "minValue": 0
             }
            ],
            "inputType": "number"
           },
           {
            "name": "M6",
            "title": "Stay in September 2020",
            "cellType": "text",
            "width": "10",
            "validators": [
             {
              "type": "numeric",
              "text": "This number cannot be negative",
              "minValue": 0
             }
            ],
            "inputType": "number"
           },
           {
            "name": "M7",
            "title": "Stay from October 2020 or later",
            "cellType": "expression",
            "width": "10",
            "expression": "{NbRoomNightsBooked}-{row.M1}-{row.M2}-{row.M3}-{row.M4}-{row.M5}-{row.M6}"
           }
          ],
          "choices": [
           1,
           2,
           3,
           4,
           5
          ],
          "cellType": "text",
          "rows": [
           {
            "value": "NbRoomsByMonth",
            "text": "Number of room nights booked last week"
           }
          ]
         }
        ]
       }
      ],
      "title": "LAST WEEK ACTIVITY (from Monday to Sunday)(Page 2/3)"
     },
     {
      "name": "ON THE BOOK",
      "elements": [
       {
        "type": "text",
        "name": "TotalNumberRoomAvailable",
        "width": "10",
        "title": "Total number of keys in your hotel",
        "isRequired": true,
        "validators": [
         {
          "type": "numeric",
          "text": "This number cannot be negative",
          "minValue": 0
         }
        ],
        "titleLocation": "left",
        "inputType": "number",
        "size": 10
       },
       {
        "type": "matrixdropdown",
        "name": "SplitTotalRoomAvailable",
        "title": "Monthly room availability",
        "validators": [
         {
          "type": "expression",
          "text": "The pourcentage is not correct for September 2020.",
          "expression": "({SplitTotalRoomAvailable.NbOfOccupiedRooms.M6}/{SplitTotalRoomAvailable.TotalRoomNightAvailable.M6})<=1 OR ({SplitTotalRoomAvailable.TotalRoomNightAvailable.M6} empty  AND {SplitTotalRoomAvailable.NbOfOccupiedRooms.M6} empty) OR \n({SplitTotalRoomAvailable.TotalRoomNightAvailable.M6}=0  AND {SplitTotalRoomAvailable.NbOfOccupiedRooms.M6}=0) "
         },
         {
          "type": "expression",
          "text": "The pourcentage is not correct for August 2020.",
          "expression": "({SplitTotalRoomAvailable.NbOfOccupiedRooms.M5}/{SplitTotalRoomAvailable.TotalRoomNightAvailable.M5})<=1 OR ({SplitTotalRoomAvailable.TotalRoomNightAvailable.M5} empty  AND {SplitTotalRoomAvailable.NbOfOccupiedRooms.M5} empty) OR \n({SplitTotalRoomAvailable.TotalRoomNightAvailable.M5}=0  AND {SplitTotalRoomAvailable.NbOfOccupiedRooms.M5}=0) "
         },
         {
          "type": "expression",
          "text": "The pourcentage is not correct for July 2020.",
          "expression": "({SplitTotalRoomAvailable.NbOfOccupiedRooms.M4}/{SplitTotalRoomAvailable.TotalRoomNightAvailable.M4})<=1 OR ({SplitTotalRoomAvailable.TotalRoomNightAvailable.M4} empty  AND {SplitTotalRoomAvailable.NbOfOccupiedRooms.M4} empty) OR \n({SplitTotalRoomAvailable.TotalRoomNightAvailable.M4}=0  AND {SplitTotalRoomAvailable.NbOfOccupiedRooms.M4}=0) "
         },
         {
          "type": "expression",
          "text": "The pourcentage is not correct for June 2020.",
          "expression": "({SplitTotalRoomAvailable.NbOfOccupiedRooms.M3}/{SplitTotalRoomAvailable.TotalRoomNightAvailable.M3})<=1 OR ({SplitTotalRoomAvailable.TotalRoomNightAvailable.M3} empty  AND {SplitTotalRoomAvailable.NbOfOccupiedRooms.M3} empty) OR \n({SplitTotalRoomAvailable.TotalRoomNightAvailable.M3}=0  AND {SplitTotalRoomAvailable.NbOfOccupiedRooms.M3}=0) "
         },
         {
          "type": "expression",
          "text": "The pourcentage is not correct for April 2020.",
          "expression": "({SplitTotalRoomAvailable.NbOfOccupiedRooms.M1}/{SplitTotalRoomAvailable.TotalRoomNightAvailable.M1})<=1 OR ({SplitTotalRoomAvailable.TotalRoomNightAvailable.M1} empty  AND {SplitTotalRoomAvailable.NbOfOccupiedRooms.M1} empty) OR \n({SplitTotalRoomAvailable.TotalRoomNightAvailable.M1}=0  AND {SplitTotalRoomAvailable.NbOfOccupiedRooms.M1}=0) "
         },
         {
          "type": "expression",
          "text": "The pourcentage is not correct for May 2020.",
          "expression": "({SplitTotalRoomAvailable.NbOfOccupiedRooms.M2}/{SplitTotalRoomAvailable.TotalRoomNightAvailable.M2})<=1 OR ({SplitTotalRoomAvailable.TotalRoomNightAvailable.M2} empty  AND {SplitTotalRoomAvailable.NbOfOccupiedRooms.M2} empty) OR \n({SplitTotalRoomAvailable.TotalRoomNightAvailable.M2}=0  AND {SplitTotalRoomAvailable.NbOfOccupiedRooms.M2}=0) "
         }
        ],
        "columns": [
         {
          "name": "M1",
          "title": "April 2020",
          "cellType": "text",
          "isRequired": true,
          "width": "10",
          "validators": [
           {
            "type": "numeric",
            "text": "The numbers cannot be negative",
            "minValue": 0
           }
          ],
          "totalExpression": "({SplitTotalRoomAvailable.NbOfOccupiedRooms.M1}/{SplitTotalRoomAvailable.TotalRoomNightAvailable.M1})",
          "totalDisplayStyle": "percent",
          "inputType": "number"
         },
         {
          "name": "M2",
          "title": "May 2020",
          "cellType": "text",
          "isRequired": true,
          "width": "10",
          "validators": [
           {
            "type": "numeric",
            "text": "The numbers cannot be negative",
            "minValue": 0
           }
          ],
          "totalExpression": "({SplitTotalRoomAvailable.NbOfOccupiedRooms.M2}/{SplitTotalRoomAvailable.TotalRoomNightAvailable.M2})",
          "totalDisplayStyle": "percent",
          "inputType": "number"
         },
         {
          "name": "M3",
          "title": "June 2020",
          "cellType": "text",
          "isRequired": true,
          "width": "10",
          "validators": [
           {
            "type": "numeric",
            "text": "The numbers cannot be negative",
            "minValue": 0
           }
          ],
          "totalExpression": "({SplitTotalRoomAvailable.NbOfOccupiedRooms.M3}/{SplitTotalRoomAvailable.TotalRoomNightAvailable.M3})",
          "totalDisplayStyle": "percent",
          "inputType": "number"
         },
         {
          "name": "M4",
          "title": "July 2020",
          "cellType": "text",
          "isRequired": true,
          "width": "10",
          "validators": [
           {
            "type": "numeric",
            "text": "The numbers cannot be negative",
            "minValue": 0
           }
          ],
          "totalExpression": "({SplitTotalRoomAvailable.NbOfOccupiedRooms.M4}/{SplitTotalRoomAvailable.TotalRoomNightAvailable.M4})",
          "totalDisplayStyle": "percent",
          "inputType": "number"
         },
         {
          "name": "M5",
          "title": "August 2020",
          "cellType": "text",
          "isRequired": true,
          "width": "10",
          "validators": [
           {
            "type": "numeric",
            "text": "The numbers cannot be negative",
            "minValue": 0
           }
          ],
          "totalExpression": "({SplitTotalRoomAvailable.NbOfOccupiedRooms.M5}/{SplitTotalRoomAvailable.TotalRoomNightAvailable.M5})",
          "totalDisplayStyle": "percent",
          "inputType": "number"
         },
         {
          "name": "M6",
          "title": "September 2020",
          "cellType": "text",
          "isRequired": true,
          "width": "10",
          "validators": [
           {
            "type": "numeric",
            "text": "The numbers cannot be negative",
            "minValue": 0
           }
          ],
          "totalExpression": "({SplitTotalRoomAvailable.NbOfOccupiedRooms.M6}/{SplitTotalRoomAvailable.TotalRoomNightAvailable.M6})",
          "totalDisplayStyle": "percent",
          "inputType": "number"
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "cellType": "text",
        "rows": [
         {
          "value": "NbOfOccupiedRooms",
          "text": "Room nights booked"
         },
         {
          "value": "TotalRoomNightAvailable",
          "text": "Room nights available"
         }
        ],
        "totalText": "Occupancy"
       },{
        "type": "panel",
        "name": "panelWarningTotalNumber",
        "elements": [
         {
          "type": "html",
          "name": "WarningTotalNumber",
          "visibleIf": "{SplitTotalRoomAvailable.TotalRoomNightAvailable.M6} = 0 OR {SplitTotalRoomAvailable.TotalRoomNightAvailable.M5} = 0 OR {SplitTotalRoomAvailable.TotalRoomNightAvailable.M4} = 0 OR {SplitTotalRoomAvailable.TotalRoomNightAvailable.M3} = 0 OR {SplitTotalRoomAvailable.TotalRoomNightAvailable.M2} = 0 OR {SplitTotalRoomAvailable.TotalRoomNightAvailable.M1} = 0",
          "html": "Rooms available for Sale can only be '0' for a month if the hotel is fully closed during the entire month"
         }
        ]
       }
      ],
      "title": "ON THE BOOK (stay month)(Page 3/3)"
     }
    ]
   };


   export default finalSurvey;