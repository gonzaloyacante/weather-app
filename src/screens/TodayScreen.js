import { Text, View, Image } from "react-native";

import useFetchWeatherCurrent from "../hooks/useFetchWeatherCurrent.js";
import useFetchWeatherForecast from "../hooks/useFetchWeatherForecast";

import { format, parse, isValid } from "date-fns";
import { es } from "date-fns/locale";

import LoadingErrorComponent from "../components/LoadingErrorComponent";
import { capitalizeFirstLetter } from "../utils.js";
import { todayScreenStyles as styles } from "../styles.js";

const TodayScreen = () => {
  const location = "London";

  const { weatherData, isLoading, error } = useFetchWeatherCurrent(location);
  const { forecastData } = useFetchWeatherForecast(location, 1);

  const formatDate = (dateString) => {
    if (dateString) {
      const parsedDate = parse(dateString, "yyyy-MM-dd HH:mm", new Date());
      return isValid(parsedDate) ? parsedDate : "No disponible";
    }
    return "No disponible";
  };

  const getValue = (data, defaultValue = "No disponible") => {
    return data !== undefined && data !== null ? data : defaultValue;
  };

  return (
    <View style={styles.container}>
      <LoadingErrorComponent isLoading={isLoading} error={error}>
        {weatherData && (
          <View>
            <View style={styles.infoPrimaryContainer}>
              <View>
                {isValid(formatDate(weatherData?.location?.localtime)) ? (
                  <>
                    <Text style={styles.infoPrimaryDate}>
                      {"Hoy, "}
                      {capitalizeFirstLetter(
                        format(
                          formatDate(weatherData?.location?.localtime),
                          "EEEE",
                          {
                            locale: es,
                          }
                        )
                      )}{" "}
                      {format(
                        formatDate(weatherData?.location?.localtime),
                        "dd/MM",
                        {
                          locale: es,
                        }
                      )}{" "}
                      {getValue(
                        weatherData?.location?.localtime?.substring(11, 16)
                      )}
                    </Text>
                    <Text style={styles.infoPrimaryText}>
                      {getValue(weatherData?.location?.name)},{" "}
                      {getValue(weatherData?.location?.country)}
                    </Text>
                    <Text style={styles.infoPrimaryText}>
                      {getValue(weatherData?.current?.condition?.text)}
                    </Text>
                    {forecastData && forecastData.length > 0 && (
                      <Text style={styles.infoPrimaryText}>
                        Máx {getValue(forecastData[0]?.day?.maxtemp_c)}°C - Min{" "}
                        {getValue(forecastData[0]?.day?.mintemp_c)}°C
                      </Text>
                    )}
                  </>
                ) : (
                  <Text style={styles.infoPrimaryDate}>Fecha inválida</Text>
                )}
              </View>
              <View>
                <Image
                  style={styles.infoPrimaryIcon}
                  source={{
                    uri: `https:${getValue(
                      weatherData?.current?.condition?.icon,
                      ""
                    )}`,
                  }}
                />
                <Text style={styles.infoPrimaryTemp}>
                  {getValue(weatherData?.current?.temp_c, "No disponible")}°C
                </Text>
              </View>
            </View>
            <View style={styles.infoSecondaryContainer}>
              <View>
                <Text style={styles.infoSecondaryText}>Humedad</Text>
                <Text style={styles.infoSecondaryText}>Viento</Text>
                <Text style={styles.infoSecondaryText}>Presión</Text>
                <Text style={styles.infoSecondaryText}>Precipitación</Text>
                <Text style={styles.infoSecondaryText}>Cobertura de nubes</Text>
                <Text style={styles.infoSecondaryText}>Sensación térmica</Text>
                <Text style={styles.infoSecondaryText}>Visibilidad</Text>
                <Text style={styles.infoSecondaryText}>Indice UV</Text>
                <Text style={styles.infoSecondaryText}>Ráfagas</Text>
                <Text style={styles.infoSecondaryText}>Salida del sol</Text>
                <Text style={styles.infoSecondaryText}>Puesta del sol</Text>
              </View>
              <View>
                <Text style={styles.infoSecondaryText}>
                  {getValue(weatherData?.current?.humidity)}%
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(weatherData?.current?.wind_kph)} Km/H{" "}
                  {getValue(weatherData?.current?.wind_dir)}
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(weatherData?.current?.pressure_mb)} mb (
                  {getValue(weatherData?.current?.pressure_in)} in)
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(weatherData?.current?.precip_mm)} mm
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(weatherData?.current?.cloud)}%
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(weatherData?.current?.feelslike_c)}°C
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(weatherData?.current?.vis_km)} km
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(weatherData?.current?.uv)}
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(weatherData?.current?.gust_kph)} Km/H
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(forecastData?.[0]?.astro?.sunrise)}
                </Text>
                <Text style={styles.infoSecondaryText}>
                  {getValue(forecastData?.[0]?.astro?.sunset)}
                </Text>
              </View>
            </View>
          </View>
        )}
      </LoadingErrorComponent>
    </View>
  );
};

export default TodayScreen;
