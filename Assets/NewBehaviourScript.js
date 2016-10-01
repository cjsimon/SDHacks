#pragma strict

function Start () {

// Start recording with built-in Microphone and play the recorded audio right away
	var aud = GetComponent.<AudioSource>();
	aud.clip = Microphone.Start("Built-in Microphone", true, 10, 44100);
	aud.Play();


//to see the device Unity is using 
	for (var device in Microphone.devices){
			Debug.Log("Name: " + device);
	}
}

function Update () {

}