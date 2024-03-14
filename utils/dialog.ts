import {render} from "vue";

export const showDialog = async (InnerComponent: any)=> {
    const MyDialog = (await import('~/components/my/Dialog.vue')).default
    const vNode = h(MyDialog, {
        component: InnerComponent //toRaw(unref(MyLogin))
    })
    const container = document.createElement('div')
    render(vNode, container)
    document.body.append(container)
}