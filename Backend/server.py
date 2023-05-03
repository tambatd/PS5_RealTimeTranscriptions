from flask import Flask
import whisperTranscriptions
app = Flask(__name__)

@app.route('/')
def index():  
    return "string"  


@app.route('/transcribedAudio', methods=['POST'])
def transcribedAudio():
    try:
       audio = whisperTranscriptions()
       return audio
    except:
        error = "ERROR"
        return error





if __name__ == '__main__':
    app.run(debug=True, port=8001)

