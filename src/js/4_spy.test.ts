import { describe, expect, it, vi } from "vitest";


const obj = {
    random: () => Math.random()
}

it("should spy", () => {
    const spyFn = vi.spyOn(obj, "random").mockImplementation(() => 20)

    expect(obj.random()).toBe(20)
    expect(spyFn).toBeCalledTimes(1)
    expect(spyFn).toHaveReturnedWith(20)
})

it("mock return value", () => {
    const spyFn = vi.spyOn(obj, "random").mockReturnValue(20)

    expect(obj.random()).toBe(20)
    expect(spyFn).toBeCalledTimes(1)
    expect(spyFn).toHaveReturnedWith(20)
})
