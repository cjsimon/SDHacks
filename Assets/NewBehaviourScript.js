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

//for raw data stuff

	var samples = new float[aud.clip.samples * aud.clip.channels];
	aud.clip.GetData(samples, 0);
	
	for (var i = 0; i < samples.Length; ++i){
		samples[i] = samples[i] * 0.5f;
	}

	aud.clip.SetData(samples, 0);


}

function Update () {

}