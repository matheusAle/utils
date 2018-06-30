import { Directive, ElementRef, Input, OnInit, group } from '@angular/core';


/**
 * Está diretiva desabilita o botão e seu grupo quando a ação acontecer.
 * E coloca no innerHTML um icone de load.
 */

@Directive({
    selector: '[utLoad]',
})
export class LoadDirective implements OnInit {
    
    /**
     * Função a ser chamada quando a ação acontecer
     */
    @Input() utLoad: Function;
    
    /**
     * Evento que vai disparar a ação.
     */
    @Input() event = 'click';
    
    /**
     * Elementos que serão desabilitados quando a ação acontecer.
     */
    @Input() group: Array<any>;
    
    /**
     * Tempo (em ms) que o icone de sucesso/erro vão ficar visiveis.
     */
    @Input() timeState: number = 1500;
    
    private bkData;
    
    constructor(private el: ElementRef) { }
    
    ngOnInit() {
        this.el.nativeElement.addEventListener(this.event, (event) => {
            this.bkData = this.el.nativeElement.innerHTML;
            this.el.nativeElement.innerHTML = '<i class="ut-spinner-load fa fa-spinner fa-spin"></i>';
            this.el.nativeElement.disabled = true;
            
            if (this.group) {
                this.group.forEach(e => e.disabled = true);
            }
            const r = this.utLoad();
            if (r instanceof Promise) {
                r.then((data) => {
                    this.el.nativeElement.innerHTML = '<i class="ut-spinner-success fa fa-check"></i>';
                    this.end();  
                })
                .catch((e) => {
                    this.el.nativeElement.innerHTML = '<i class="ut-spinner-error fa fa-times"></i>';
                    this.end();                    
                    throw e;
                });
            } else {
                this.end();
            }
        })
    }
    
    end() {
        setTimeout(() => this.el.nativeElement.innerHTML = this.bkData, this.timeState);
        this.el.nativeElement.disabled = false;
        if (this.group) {
            this.group.forEach(e => e.disabled = false);
        } 
    }
    
}
