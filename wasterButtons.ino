#include <Keyboard.h>

char ctrlKey = KEY_LEFT_GUI;


const int butt1 = 2;
const int butt2 = 3;
const int butt3 = 4;
const int butt4 = 5;

const int butt5 = 6;
const int butt6 = 7;
const int butt7 = 8;
const int butt8 = 9;
const int butt9 = 10;

int butt1State = 0;
int butt2State = 0;
int butt3State = 0;
int butt4State = 0;

int butt5State = 0;
int butt6State = 0;
int butt7State = 0;
int butt8State = 0;

int butt9State = 0;

void setup() {
  pinMode(butt1, INPUT);
  pinMode(butt2, INPUT);
  pinMode(butt3, INPUT);
  pinMode(butt4, INPUT);

  pinMode(butt5, INPUT);
  pinMode(butt6, INPUT);
  pinMode(butt7, INPUT);
  pinMode(butt8, INPUT);
  pinMode(butt9, INPUT);
  Keyboard.begin();

  Serial.begin(9600);
}

void loop() {



  butt1State = digitalRead(butt1);
  butt2State = digitalRead(butt2);
  butt3State = digitalRead(butt3);
  butt4State = digitalRead(butt4);

  butt5State = digitalRead(butt5);
  butt6State = digitalRead(butt6);
  butt7State = digitalRead(butt7);
  butt8State = digitalRead(butt8);

  butt9State = digitalRead(butt9);

  
  if (allOn()) {
    if (butt1State == HIGH) {
      Keyboard.press('f');
      Serial.println("button 1 is being pressed");
    }
    if (butt2State == HIGH) {
      Keyboard.press('g');
      Serial.println("button 2 is being pressed");
    }
    if (butt3State == HIGH) {
      Keyboard.press('h');
      Serial.println("button 3 is being pressed");
    }
    if (butt4State == HIGH) {
      Keyboard.press('j');
      Serial.println("button 4 is being pressed");
    }
    Keyboard.releaseAll();
  }

if (allOn2()) {
    if (butt5State == HIGH) {
      Keyboard.press('u');
      Serial.println("button 5 is being pressed");
    }
    if (butt6State == HIGH) {
      Keyboard.press('i');
      Serial.println("button 6 is being pressed");
    }
    if (butt7State == HIGH) {
      Keyboard.press('o');
      Serial.println("button 7 is being pressed");
    }
    if (butt8State == HIGH) {
      Keyboard.press('p');
      Serial.println("button 8 is being pressed");
    }
    Keyboard.releaseAll();
  }
  delay(10);
  if (butt9State == HIGH) {
      Keyboard.press(ctrlKey);
      Keyboard.press('r');
      Serial.println("button 9 is being pressed");
      Keyboard.releaseAll();
   }
  
}

boolean allOn() {
  int counter = 0;
  if (butt1State == HIGH) {
    counter++;
  }
  if (butt2State == HIGH) {
    counter++;
  }
  if (butt3State == HIGH) {
    counter++;
  }
  if (butt4State == HIGH) {
    counter++;
  }
  
  if (counter > 1) {
    return (false);
  } else {
    return (true);
  }


}


boolean allOn2() {
  int counter = 0;
  if (butt5State == HIGH) {
    counter++;
  }
  if (butt6State == HIGH) {
    counter++;
  }
  if (butt7State == HIGH) {
    counter++;
  }
  if (butt8State == HIGH) {
    counter++;
  }

  if (counter > 1) {
    return (false);
  } else {
    return (true);
  }


}
