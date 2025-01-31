import {describe} from "../../testLib";
import {FakeSensor, FakeVideoRecorder} from "./fakes";
import {VideoSurveillanceController} from "../../video_surveillance/videoSurveillanceController";
import {MotionSensor, VideoRecorder} from "../../video_surveillance/videoSurveillance";

/**
 * - Command the video recorder to stop recording when the motion sensor does not detect movement
 * - Command the video recorder to start recording when the motion sensor detects movement
 * - Command the video recorder to stop recording when the motion sensor throws an unexpected error
 * - Check the motion sensor state each second
 */

describe(`Camera controller`, () => {
    let sensor: MotionSensor;
    let recorder: VideoRecorder;
    let controller: VideoSurveillanceController;

    beforeEach(() => {
        sensor = new FakeSensor();
        recorder = new FakeVideoRecorder();
        controller = new VideoSurveillanceController(sensor, recorder);
    });

    it('asks the video recorder to stop recording when the sensor does not detect movement', () => {
        const stubSensor = jest.spyOn(sensor, 'isDetectingMotion');
        stubSensor.mockImplementation(() => false);
        const spyRecorder = jest.spyOn(recorder, 'stopRecording');

        controller.recordMotion();

        expect(spyRecorder).toHaveBeenCalled();
    });

    it('asks the video recorder to start recording when the sensor detects movement', () => {
        const stubSensor = jest.spyOn(sensor, 'isDetectingMotion');
        stubSensor.mockImplementation(() => true);
        const spyRecorder = jest.spyOn(recorder, 'startRecording');

        controller.recordMotion();

        expect(spyRecorder).toHaveBeenCalled();
    });

    it('asks the video recorder to stop recording when the sensor throws an unexpected error', () => {
        const stubSensor = jest.spyOn(sensor, 'isDetectingMotion');
        stubSensor.mockImplementation(() => {
            throw new Error('Unexpected Error')
        });
        const spyRecorder = jest.spyOn(recorder, 'stopRecording');

        controller.recordMotion();

        expect(spyRecorder).toHaveBeenCalled();
    });
})
