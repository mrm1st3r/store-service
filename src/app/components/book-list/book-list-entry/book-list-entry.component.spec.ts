import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListEntryComponent } from './book-list-entry.component';
import { getBook } from 'src/test/books';

describe('BookListEntryComponent', () => {
    let component: BookListEntryComponent;
    let fixture: ComponentFixture<BookListEntryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BookListEntryComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookListEntryComponent);
        component = fixture.componentInstance;
        component.book = getBook();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
