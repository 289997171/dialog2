
let counter = 0
export default defineEventHandler(async (event)=> {

    const requestIP = getRequestIP(event, {
        xForwardedFor: true
    });
    console.log('requestIP', requestIP)
    counter++
    console.log('counter from cookie', getCookie(event, 'counter'))
    console.log('counter from server', counter)
    //setCookie(event, 'counter', counter.toString(), {})
    return {
        counter,
        requestIP
    }
})