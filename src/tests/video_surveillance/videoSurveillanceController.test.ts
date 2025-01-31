import {describe} from "../../testLib";
import {SpyRecorder, StubSensorDetectingMotion, StubSensorDetectingNoMotion} from "./fakes";
import {VideoSurveillanceController} from "../../video_surveillance/videoSurveillanceController";

/**
 * - Command the video recorder to stop recording when the motion sensor does not detect movement
 * - Command the video recorder to start recording when the motion sensor detects movement
 * - Command the video recorder to stop recording when the motion sensor throws an unexpected error
 * - Check the motion sensor state each second
 */

describe(`Camera controller`, () => {
    it('asks the video recorder to stop recording when the sensor does not detect movement', () => {
        const sensor = new StubSensorDetectingNoMotion();
        const recorder = new SpyRecorder();
        const controller = new VideoSurveillanceController(sensor, recorder);

        controller.recordMotion();

        expect(recorder.stopCalled).toBeTruthy()
    });

    it('asks the video recorder to start recording when the sensor detects movement', () => {
        const sensor = new StubSensorDetectingMotion();
        sensor.isDetectingMotion = () => true;
        const recorder = new SpyRecorder();
        const controller = new VideoSurveillanceController(sensor, recorder);

        controller.recordMotion();

        expect(recorder.startCalled).toBeTruthy();
    });
})
