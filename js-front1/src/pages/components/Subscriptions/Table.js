import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import tableTheme from './tableTheme';

const SubscriptionTable = ({ subscriptions, delSubscription }) => {
  return (
    // Box - это контейнер с отступами
    // Мап каждую подписку в отдельную карточку
    // variant="h5" - заголовок 5-го уровня
    // toLocaleString() форматирует число для удобного чтения
    <ThemeProvider theme={tableTheme}> 
      <Box sx={{ padding: '24px' }}> 
        {subscriptions.map((subscription, index) => (
          <Card key={index} sx={{ marginBottom: '16px' }}>
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