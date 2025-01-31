import {MotionSensor, VideoRecorder} from "./videoSurveillance";

export class VideoSurveillanceController {
    constructor(private sensor: MotionSensor, private recorder: VideoRecorder) {
    }

    recordMotion() {
        try {
            this.sensor.isDetectingMotion() ? this.recorder.startRecording() : this.recorder.stopRecording()
        } catch (e) {
            this.recorder.stopRecording()
        }
    }
}
