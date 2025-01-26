import {describe} from "../../testLib";
import {FakeMotionSensor, FakeVideoRecorder} from "./fakes";
import {VideoSurveillanceController} from "../../video_surveillance/videoSurveillanceController";

/**
 * - Command the video recorder to stop recording when the motion sensor does not detect movement
 * - Command the video recorder to start recording when the motion sensor detects movement
 * - Command the video recorder to stop recording when the motion sensor throws an unexpected error
 * - Check the motion sensor state each second
 */

describe(`Camera controller`, () => {
    it('asks the video recorder to stop recording when the sensor does not detect movement', () => {
        let called = false;
        const saveCall = () => {
            called = true;
        }
        const sensor = new FakeMotionSensor();
        const recorder = new FakeVideoRecorder();
        recorder.stopRecording = saveCall;
        const controller = new VideoSurveillanceController(sensor, recorder);

        controller.recordMotion();

        expect(called).toBeTruthy()
    });

    it('asks the video recorder to start recording when the sensor detects movement', () => {
        let called = false;
        const saveCall = () => {
            called = true;
        }
        const sensor = new FakeMotionSensor();
        sensor.isDetectingMotion = () => true;
        const recorder = new FakeVideoRecorder();
        recorder.startRecording = saveCall;
        const controller = new VideoSurveillanceController(sensor, recorder);

        controller.recordMotion();

        expect(called).toBeTruthy();
    });
})
