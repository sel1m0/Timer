import { secondsToString } from "./convertTime";

it("should convert 5s to '00:05", () => {
    expect(secondsToString(5)).toEqual("00:05");
});
it("should convert 9s to '00:09", () => {
    expect(secondsToString(9)).toEqual("00:09");
});
it("should convert 11s to '00:11", () => {
    expect(secondsToString(11)).toEqual("00:11");
});
it("should convert 65s to '01:05", () => {
    expect(secondsToString(65)).toEqual("01:05");
});
it("should convert 735s to '12:15", () => {
    expect(secondsToString(735)).toEqual("12:15");
});
it("should convert 0s to '00:00", () => {
    expect(secondsToString(0)).toEqual("00:00");
});