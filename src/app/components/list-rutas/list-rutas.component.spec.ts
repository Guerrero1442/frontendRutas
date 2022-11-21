import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaRutasComponent } from './list-rutas.component';



describe('ListRutasComponent', () => {
  let component: ListaRutasComponent;
  let fixture: ComponentFixture<ListaRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
