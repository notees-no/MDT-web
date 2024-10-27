import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { lightTheme, darkTheme } from '../../../theme';

const SubscriptionTable = ({ subscriptions, delSubscription, isDarkTheme }) => {
  return (
    // Box - это контейнер с отступами
    // Мап каждую подписку в отдельную карточку
    // variant="h5" - заголовок 5-го уровня
    // toLocaleString() форматирует число для удобного чтения
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Box sx={{ padding: '24px', backgroundColor: isDarkTheme ? 'background.paper' : 'background.default', height: '100vh', }}>
        {subscriptions.map((subscription, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="h5" component="div">
                {subscription.name}
              </Typography>
              <Typography color="text.secondary">
                Категория: {subscription.category}
              </Typography>
              <Typography color="text.secondary">
                Подписчики: {subscription.followers.toLocaleString()}
              </Typography>
              <Button onClick={() => delSubscription(subscription.id)}>
                Перестать отслеживать
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default SubscriptionTable;