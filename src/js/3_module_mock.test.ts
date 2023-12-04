import { describe, expect, it, vi } from "vitest";
import { sum } from "../mocks";


vi.mock("../mocks", async (imp) => {
    const res = await imp<typeof import('../mocks')>()

    return {
        ...res,
        sum: vi.fn((n1: number, n2: number) => 40)
    }
})


describe("module mock", () => {
    it("should mock sum function", () => {

        const res = sum(1, 3)
        expect(res).toBe(40)
    })
})