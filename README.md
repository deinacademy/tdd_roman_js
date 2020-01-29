# Kata: TDD Arabic to Roman Numbers with C# #

## Project ##

Clone this project:

| OS | Command |
| --- | --- |
| Mac |`git clone https://github.com/equiman/tdd_roman_js.git ~/Development/Jest/tdd_roman_js` |
| Linux |`git clone https://github.com/equiman/tdd_roman_js.git ~/Development/Jest/tdd_roman_js` |
| Win |`git clone https://github.com/equiman/tdd_roman_js.git D:\Development\Jest\tdd_roman_js` |

Install NPM dependencies:

`npm i`

## Requirements ##

* [Node](https://nodejs.org/en/) (with NPM)
* [Visual Studio Code](https://code.visualstudio.com/)

## Roman Numbers ##

### Basic Symbols ###

| 1 | 5 | 10 | 50 | 100 | 500 | 1000 |
|:-:|:-:|:--:|:--:|:---:|:---:|:----:|
| I | V | X  | L  | C   | D   | M    |

### Basic Combinations ###

| 1 | 2  | 3   | 4  | 5 | 6  | 7   | 8    | 9  |
|:-:|:--:|:---:|:--:|:-:|:--:|:---:|:----:|:--:|
| I | II | III | IV | V | VI | VII | VIII | IX |

| 10 | 20 | 30  | 40 | 50 | 60 | 70  | 80   | 90 |
|:--:|:--:|:---:|:--:|:--:|:--:|:---:|:----:|:--:|
| X  | XX | XXX | XL | L  | LX | LXX | LXXX | XC |

| 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800  | 900 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:----:|:---:|
| C   | CC  | CCC | CD  | D   | DC  | DCC | DCCC | CM  |

### How Convert ###

To convert Roman Numerals we need to split it up into place values (ones, tens, hundreds, etc.). Example 999

| Place Value | Number | Roman Numeral |
|:------------|-------:|:--------------|
| Hundreds    |    900 | CM            |
| Tens        |     90 | XC            |
| Ones        |      9 | IX            |

You then combine them all together (starting from the top) to get CMXCIX.

## Place Value ##

| Expression        | Place              | Europe    |
|------------------:|:-------------------|:----------|
|                 1 | ones               |           |
|                10 | tens               |           |
|               100 | hundreds           |           |
|             1,000 | thousands          |           |
|            10,000 | ten thousands      |           |
|         1,000,000 | hundreds thousands |           |
|         1,000,000 | millions           |           |
|        10,000,000 | ten millions       |           |
|       100,000,000 | hundred millions   |           |
|     1,000,000,000 | billions           | milliards |
| 1,000,000,000,000 | trillions          | billions  |
