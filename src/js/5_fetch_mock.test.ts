import { it, vi, expect } from "vitest"

const fetchData = async () => {
    const res = await fetch("/users")
    const data = await res.json()
    return data
}

it("mock fetch", async () => {
    const spyFn = vi.spyOn(window, "fetch").mockImplementation(MockFetchResponse)
    const res = await fetchData()
    expect(res).toEqual({ developer: "Ashish", url: "/users" })
    expect(spyFn).toHaveBeenCalledTimes(1)
})


const MockFetchResponse: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) | (() => Promise<Promise<Response>>) = (url, init) => {
    switch (url) {
        case "/users": {
            return {
                status: 200,
                json: async () => ({ developer: "Ashish", url })
            }
        }
        default: {
            return {
                status: 400,
                json: async () => ({ error: "Something went wrong", url })
            }
        }
    }
}