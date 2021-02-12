import {Pipe, PipeTransform} from '@angular/core'
import { pipe } from 'rxjs';

@Pipe({
    name:'summary'
})
export class SummaryPipe implements  PipeTransform{
    transform(value: string, limt?: number){
        if(!value)
            return;

        let actualLimt = (limt) ? limt : 50;
        return value.substr(0, actualLimt) + "...";
    }
}