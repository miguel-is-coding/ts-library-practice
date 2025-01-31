import {MotionSensor, VideoRecorder} from "./videoSurveillance";

export class VideoSurveillanceController {
    constructor(private sensor: MotionSensor, private recorder: VideoRecorder) {
    }

    recordMotion(numberOfSeconds = 1) {
        this.range(numberOfSeconds).forEach(() => {
            this.tryToRecordMotion();
            this.waitOneSecond();
        })
    }

    private waitOneSecond() {
        const aSecond = 1000;
        let startTime = new Date().getTime();
        const endTime = startTime + aSecond;
        while (startTime < endTime) {
            startTime = new Date().getTime();
        }
    }

    private tryToRecordMotion() {
        try {
            this.sensor.isDetectingMotion() ? this.recorder.startRecording() : this.recorder.stopRecording()
        } catch (e) {
            this.recorder.stopRecording()
        }
    }

    private range(length: number) {
        return Array.from({length}, (_, i) => i);
    }
}
