import { describe, expect, it, vi } from "vitest";



describe("simple test", () => {
    it("mock fn", () => {
        const fn = vi.fn((n?: number) => {})

        fn()
        expect(fn).toBeCalledTimes(1)

        fn()
        expect(fn).toBeCalledTimes(2)

        fn(1)
        expect(fn).toBeCalledTimes(3)
        expect(fn).toHaveBeenLastCalledWith(1)
    })
})