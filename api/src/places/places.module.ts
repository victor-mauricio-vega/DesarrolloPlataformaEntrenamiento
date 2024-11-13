import { Module } from '@nestjs/common';
import { CountryController } from './controllers/country/country.controller';
import { SalonController } from './controllers/salon/salon.controller';
import { LocationController } from './controllers/location/location.controller';

@Module({
  controllers: [CountryController, SalonController, LocationController]
})
export class PlacesModule {}
