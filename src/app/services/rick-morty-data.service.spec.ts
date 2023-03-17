import { TestBed } from "@angular/core/testing"
import { Character, RickMortyDataService } from "../components/error-handling-rxjs/service/rick-morty-data.service"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RickMortyDataService', () => {
    let service: RickMortyDataService
    let httpMock: HttpTestingController
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RickMortyDataService],
            imports: [HttpClientTestingModule]
        })

        service = TestBed.inject(RickMortyDataService)
        httpMock = TestBed.inject(HttpTestingController)
    })

    describe('RickMortyDataService', () => {
        it('should created', () => {
            expect(service).toBeTruthy()
        })

        it('should perform a GET request, and get some data', () => {
            const url = 'https://rickandmortyapi.com/api/character'
            service.getData().subscribe((characters: Character[]) => {
                expect(characters).not.toEqual([])
            })

            const req = httpMock.expectOne(url)
            req.flush('Get')
        })
    })
})