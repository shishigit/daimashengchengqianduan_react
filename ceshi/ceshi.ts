import {Subject} from 'rxjs'

let ll = new Subject()

ll.subscribe(value =>
{
    console.log('222222222222')
})

ll.subscribe(value =>
{
    console.log('3333333333333')
})

ll.next('e')